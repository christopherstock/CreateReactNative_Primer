"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<react_native_1.View style={styles.container}>
                    <react_native_1.Text>My first react-native test.</react_native_1.Text>
                    <react_native_1.Text />
                    <react_native_1.Text>Open up App.js to start working on your app!</react_native_1.Text>
                    <react_native_1.Text>Changes you make will automatically reload.</react_native_1.Text>
                    <react_native_1.Text>Shake your phone to open the developer menu.</react_native_1.Text>
                </react_native_1.View>);
    };
    return App;
}(React.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
