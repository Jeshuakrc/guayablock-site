import React from "react";
import rehypeReact from "rehype-react";
import Collapsible from "../components/Collapsible";
import ListItem from "../components/ListItem";


const customComponents = {
    "collapsible": Collapsible,
    "li": ListItem
}

export function customRender(toRender, compotents) {
    return new rehypeReact({
        createElement: React.createElement,
        Fragment: React.Fragment,
        components: compotents
    }).Compiler(toRender);
}

export default new rehypeReact({
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: customComponents
}).Compiler;