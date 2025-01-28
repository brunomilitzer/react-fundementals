import {createContext, useContext, useState} from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error('Accordion-related components must be wrapped by <Accordion>.');
    }

    return ctx;
}

export default function Accordion({children, className}) {
    const [openItemId, setOpenItemId] = useState();

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId: openItemId,
        toggleItem
    }

    return <AccordionContext.Provider value={contextValue}>
        <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
}

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('AccordionItem-related components must be used within <Accordion.Item>.');
    }

    return ctx;
}

function AccordionItem({id, className, children}) {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

function AccordionTitle({className, children}) {
    const {toggleItem} = useAccordionContext();
    const id = useAccordionItemContext();

    return <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
}

function AccordionContent({className, children}) {
    const {openItemId} = useAccordionContext();
    const id = useAccordionItemContext();

    const isOpen = openItemId === id;


    return <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;