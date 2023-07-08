import { Animations } from "../views/animations/animations";

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

    const displayMode = (mode, ...nodes) => {
        for (let node of nodes) {
            node.style.display = mode;
        }
    }

    const smoothVisibility = () => {
        const close = (e, op1, op2, dur, fill) => {
            return Animations.opacity(e, op1, op2, dur, fill).finished.then(() => {
                e.style.visibility = 'hidden';
            });
        }
        const open = (e, op1, op2, dur, fill) => {
            e.style.visibility = 'visible';
            return Animations.opacity(e, op1, op2, dur, fill);
        }
        return { open, close };
    };

    const smoothVisibilityGroup = (...nodes) => {
        const close = (op1, op2, dur, fill) => {
            for (let node of nodes) {
                smoothVisibility().close(node, op1, op2, dur, fill);
            }
        }
        const open = (op1, op2, dur, fill) => {
            for (let node of nodes) {
                smoothVisibility().open(node, op1, op2, dur, fill);
            }
        }
        return { open, close };
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

    const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

    return { displayMode, smoothVisibilityGroup, smoothVisibility, rgba2hex, getNodeWithSpan, Queue, setAttributes, createNode, appendChilds, setUpSpan, location, removeChilds, addClasses };
})();

export { Tools }