import React from "react";
import rehypeReact from "rehype-react"
import Collapsible from "../components/Collapsible";


const customComponents = {
    "collapsible": Collapsible
}

export default new rehypeReact({
    createElement: React.createElement,
    components: customComponents
}).Compiler;