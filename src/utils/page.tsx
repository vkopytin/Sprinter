import * as React from 'react';
import * as ts from 'typescript';
import * as _ from 'underscore';
import * as Comps from '../app/components/index';

import * as fs from 'fs';
import * as vm from 'vm';

export {Page}

class Page {
    public static load (templateName: string, cb: Function) {
        fs.readFile(templateName, 'utf8', (err: any, xmlCode: string) => {
            let code = ts.transpileModule(xmlCode, {
                compilerOptions: {
                    module: ts.ModuleKind.CommonJS,
                    jsx: ts.JsxEmit.React,
                },
            });

            let extended = _.extend({}, Comps);
            const context = vm.createContext(extended);

            const script = new vm.Script(code.outputText);
            try {
                let res = script.runInContext(context);

                cb(res);
            } catch (ex) {
                cb(ex.message);
            }
        });
    }
    public static makeLoader(name: string, Component: any) {
        return (location, cb) => {
            Page.load(name, (children) => {
                cb(null, (props: any) => <Component {...props}>{children}</Component>);
            });
        };
    }
}
