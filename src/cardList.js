import * as React from 'react';
export default function CardList(props) {
    // LIST TYPE - Determs the breakpoint of the list
    // PRESET THEME - Determs the preset theme applied
    // CUSTOM CLASSES - determs the custom classes applied
  
    const errorHandling = (str, obj) => {
        console.log(str);
        return obj;
    };
  
    // DETERM LIST TYPE
    // - Determs whether the list should be
    const determListType = (listType) => {
        if (listType && listType.length > 1) {
            return listType;
        } else {
            return false;
        }
    };
  
    // DETERM IF PRESET THEMES ARE USED AS PROP
    const determIfThemed = (presetTheme) => {
        if (presetTheme && presetTheme.length > 1) {
            return presetTheme;
        } else {
            return false;
        }
    };
  
    // DETERM THEME PROVIDED
    // - Determ which theme was provided as prop and return correct class
    const renderPresetTheme = (presetTheme, listType) => {
        const pre = 'RespCardList';
        switch(presetTheme) {
            case "VerticalList":
                return `${pre} ${presetTheme} ${listType}`;
                break;
            case "HorizontalList":
                return `${pre} ${presetTheme} ${listType}`;
                break;
            default: return `${pre} VerticalList ${listType}`;
        };
    };
  
    // INIT FUNCTION
    // - Init determs whether props has been provided and saves them into variables.
    // - It also sends it to the calling functions to provide the correct card lists.
    const initFunc = () => {
        if (props) {
            const presetTheme = determIfThemed(props.presetTheme);
            const listType = determListType(props.listType);
            if (listType) {
                if (presetTheme) {
                    const chosenTheme = renderPresetTheme(presetTheme, listType);
                    if (props.customClasses) { // PROVIDES CUSTOM CLASSES TO PRESET THEME
                        return <ul className={`${chosenTheme} ${props.customClasses}`}>{props.children}</ul>;
                    }
                    return <ul className={chosenTheme}>{props.children}</ul>; // PROVIDES ONLY PRESET THEME
                } else {
                    if (props.customClasses) {
                        return <ul className={`RespCardList ${listType} ${props.customClasses}`}>{props.children}</ul>;
                    } else {
                        return <ul className={`RespCardList ${listType}`}>{props.children}</ul>;
                    }
                }
            } else {
                return errorHandling(
                    'No listType has been provided. To continue please provide one as prop.',
                    <span>Please provide a listType as prop in order to continue.</span>
                );
            }
        } else {
            return errorHandling(
                'No props has been provided. Please provide props like "listType"',
                <span>Please provide props in order to make this list work.</span>
            );
        }
    };
  
    return initFunc();
} 