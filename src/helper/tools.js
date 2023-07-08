const Tools = (() => {

    const location = () => {
        let location = window.location.href.split('/');
        return location[location.length - 1].replace('html', 'js');
    }

    const getNodeWithSpan = (nodeName, text, ...classNames) => {
        let node = createNode(nodeName, ...classNames);
        return setUpSpan(node, text);
    }

    const createNode = (nodeName, ...classNames) => {
        let node = document.createElement(nodeName);
        addClasses(node, ...classNames);
        return node;
    }

    const addClasses = (node, ...classes) => {
        for (let curClass of classes) {
            node.classList.add(curClass);
        }
    }

    const setUpSpan = (node, text) => {
        let span = createNode('span');
        span.textContent = text;
        node.appendChild(span);
        return node;
    }

    const appendChilds = (node, ...childs) => {
        for (let child of childs) {
            node.appendChild(child);
        }
    }

    const setAttributes = (e, atrs) => {
        for (let atr of atrs) {
            e.setAttribute(atr.name, atr.val);
        }
    }

    const removeChilds = (node) => {
        if (node !== null) {
            while (node.firstChild) {
                node.removeChild(node.lastChild);
            }
        }
    }

    const Queue = (length) => {
        let prototype = [];
        const add = (e) => {
            if (prototype.length === length) {
                prototype.shift()
            }
            prototype.push(e);
        }
        return Object.assign(prototype, { add });
    }


    return { getNodeWithSpan, Queue, setAttributes, createNode, appendChilds, setUpSpan, location, removeChilds, addClasses };
})();

export { Tools }