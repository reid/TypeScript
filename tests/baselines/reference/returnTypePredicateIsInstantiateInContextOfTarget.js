//// [returnTypePredicateIsInstantiateInContextOfTarget.tsx]
/// <reference path="/.lib/react16.d.ts" />
import * as React from "react";
class TestComponent extends React.Component<{ isAny: <T>(obj: any) => obj is T }> {
    static defaultProps = {
        isAny: TestComponent.isAny
    }

    // Type guard is defined as a static class property
    static isAny<T>(obj: any): obj is T {
        return true;
    }
}

const TestRender = () => <TestComponent />;

//// [returnTypePredicateIsInstantiateInContextOfTarget.js]
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/// <reference path="react16.d.ts" />
var React = require("react");
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Type guard is defined as a static class property
    TestComponent.isAny = function (obj) {
        return true;
    };
    TestComponent.defaultProps = {
        isAny: TestComponent.isAny
    };
    return TestComponent;
}(React.Component));
var TestRender = function () { return React.createElement(TestComponent, null); };
