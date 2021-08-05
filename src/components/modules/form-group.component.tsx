import React from "react";
import { Form, Row, Col, Accordion, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

import { IValueSet } from "../../api";

// const iso3311a2 = require('iso-3166-1-alpha-2');

export const FormGroupInput = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Row} controlId={props.controlId} hidden={props.hidden} className='mb-1'>
            <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>

            <Col xs='7' sm='9' className='d-flex'>
                <InputGroup >
                    <Form.Control
                        className='qt-input'
                        value={props.value}
                        readOnly={props.readOnly}
                        disabled={props.disabled}
                        onClick={props.onClick}
                        onChange={props.onChange}
                        placeholder={props.placeholder ? props.placeholder : props.title}
                        type={props.type ? props.type : 'text'}
                        required={props.required}
                        maxLength={props.maxLength}
                        minLength={props.minLength}
                        min={props.min}
                        max={props.max}
                        pattern={props.pattern}
                        list={props.datalistId}
                    />
                    {
                        !(props.datalist && props.datalistId)
                            ? <></>
                            : <datalist id={props.datalistId}>
                                {props.datalist}
                            </datalist>
                    }
                    {
                        !props.prepend
                            ? <></>
                            : <OverlayTrigger
                                placement='top-end'
                                overlay={
                                    <Tooltip id='prepend-tooltip'>
                                        {props.tooltip}
                                    </Tooltip>
                                }
                            ><InputGroup.Text className='prepend px-3' >{props.prepend}</InputGroup.Text>
                            </OverlayTrigger>
                    }
                </InputGroup>
            </Col>
        </Form.Group>
    )
}

export const FormGroupTextarea = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Row} controlId={props.controlId} hidden={props.hidden} className='mb-1'>
            <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>

            <Col xs='7' sm='9' className='d-flex'>
                <Form.Control
                    className='qt-input qt-input-area'
                    value={props.value}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    onClick={props.onClick}
                    onChange={props.onChange}
                    placeholder={props.placeholder ? props.placeholder : props.title}
                    type={props.type ? props.type : 'text'}
                    required={props.required}
                    maxLength={props.maxLength}
                    as='textarea'
                />
            </Col>
        </Form.Group>
    )
}


export const FormGroupAddressInput = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Col} sm={props.sm} controlId={props.controlId} className={props.className}>
            <Form.Control
                className='qt-input'
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder ? props.placeholder : props.title}
                type={props.type ? props.type : 'text'}
                required={props.required}
                maxLength={props.maxLength}
                min={props.min}
                max={props.max}
                pattern={props.pattern}
            />
        </Form.Group>
    )
}

export const FormGroupConsentCkb = (props: any) => {

    const accordionRef = React.useRef(null);
    const [collapsed, setCollapsed] = React.useState(false);

    return (!props ? <></> :
        <Form.Group as={Row} controlId='props.controlId'>
            <Col sm='10'>
                <Accordion ref={accordionRef} onSelect={(evt) => setCollapsed(evt !== null)}>
                    <Accordion.Toggle as={Form.Label} className='input-label' eventKey='0' >
                        <strong>{props.title}{(props.required ? '*' : '')}</strong>{!collapsed && props.accordion ? ' (...)' : ''}
                    </Accordion.Toggle>

                    <Accordion.Collapse className='px-3' eventKey='0' >
                        <span className='input-label text-justify'>{props.accordion}</span>
                    </Accordion.Collapse>
                </Accordion>
            </Col>
            <Col sm='2' className='jcc-xs-jcfs-md'>
                <Form.Check>
                    <Form.Check.Input
                        className={props.type === 'radio' ? 'rdb-input' : 'ckb-input'}
                        onClick={props.onClick}
                        onChange={props.onChange}
                        type={props.type}
                        name={props.name}
                        disabled={props.readOnly}
                        checked={props.checked}
                        required={props.required}
                        id={props.controlId}
                    />
                </Form.Check>
            </Col>
        </Form.Group>
    )
}

export const FormGroupPermissionCkb = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Row} controlId='props.controlId' className='mb-1'>
            <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>
            <Col xs='7' sm='9' className='jcc-xs-jcfs-md '>
                <Form.Check className='d-flex align-self-center'>
                    <Form.Check.Input
                        className={(props.type === 'radio' ? 'rdb-input' : 'ckb-input') + ' mt-0'}
                        onClick={props.onClick}
                        onChange={props.onChange}
                        type={props.type}
                        name={props.name}
                        disabled={props.readOnly}
                        checked={props.checked}
                        required={props.required}
                        id={props.controlId}
                    />
                    <Form.Label className='rdb-label mb-0'>{props.label}</Form.Label>
                </Form.Check>
            </Col>
        </Form.Group>
    )
}

export const FormGroupSexRadio = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Col} xs='12' sm='4' className='d-flex mb-0' controlId={props.controlId}>
            <Form.Check className='d-flex align-self-center'>
                <Form.Check.Input
                    className='rdb-input'
                    type='radio'
                    name={props.name}
                    id={props.controlId}
                    checked={props.checked}
                    onChange={props.onChange}
                    required={props.required}
                />
                <Form.Label className='rdb-label mb-0'>{props.title}</Form.Label>
            </Form.Check>
        </Form.Group>
    )
}

export const FormGroupDccConsentRadio = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Col} xs='5' sm='3' md='2' lg='1' className='d-flex mb-0 mr-2 ml-0 pl-0' controlId={props.controlId}>
            <Form.Check className='d-flex align-self-center'>
                <Form.Check.Input
                    className='rdb-input'
                    type='radio'
                    name={props.name}
                    id={props.controlId}
                    checked={props.checked}
                    onChange={props.onChange}
                    required={props.required}
                />
                <Form.Label className='rdb-label mb-0 pl-2'>{props.title}</Form.Label>
            </Form.Check>
        </Form.Group>
    )
}

export const FormGroupRadio = (props: any) => {

    return (!props ? <></> :
        <Form.Group as={Row} controlId={props.controlId} className='mb-1'>
            <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>

            <Col xs='7' sm='9' className='d-flex'>
                <Form.Check className='align-self-center'>
                    <Form.Check.Input
                        className='rdb-input'
                        type='radio'
                        name={props.name}
                        id={props.controlId}
                        checked={props.checked}
                        onChange={props.onChange}
                        required={props.required}
                    />
                </Form.Check>
            </Col>
        </Form.Group>
    )
}

export const FormGroupSelect = (props: any) => {
    return (!(props && props.options)
        ? <></>
        : <Form.Group as={Row} hidden={props.hidden} controlId={props.controlId} className='mb-1'>
            <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>

            <Col xs='7' sm='9' className='d-flex'>
                <Form.Control as="select"
                    className={!props.value ? 'selection-placeholder qt-input' : 'qt-input'}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder ? props.placeholder : props.title}
                    required={props.required}
                >
                    <option disabled={props.required} key={0} value=''>{props.placeholder ? props.placeholder : props.title}</option>
                    {props.options}
                </Form.Control>
            </Col>
        </Form.Group>
    )
}

export const FormGroupValueSetSelect = (props: any) => {

    const valueSet = props.valueSet;
    const [options, setOptions] = React.useState<JSX.Element[]>();

    React.useEffect(() => {
        if (valueSet) {
            const options = getOptionsForValueSet(valueSet);
            setOptions(options);
        }
    }, [valueSet])


    const getOptionsForValueSet = (valueSet: IValueSet): JSX.Element[] => {
        const result: JSX.Element[] = [];
        for (const key of Object.keys(valueSet)) {
            result.push(valueSet[key].active === false
                ? <option key={key} value={key}>&#xf071; {valueSet[key].display}</option>
                : <option key={key} value={key}>{valueSet[key].display}</option>);
        }

        return result;
    }

    return (!(props && options)
        ? <></>
        : <FormGroupSelect controlId={props.controlId}
            title={props.title}
            value={props.value}
            hidden={props.hidden}
            required={props.required}
            onChange={props.onChange}
            options={options}
        />
    )
}

// export const FormGroupISOCountrySelect = (props: any) => {

//     const [options, setOptions] = React.useState<JSX.Element[]>();

//     React.useEffect(() => {
//         const options: JSX.Element[] = [];
//         const codes: string[] = iso3311a2.getCodes().sort();

//         for (const code of codes) {
//             options.push(<option key={code} value={code}>{code + " : " + iso3311a2.getCountry(code)}</option>)
//         }

//         setOptions(options);
//     }, [])


//     return (!(props && options) ? <></> :
//         <Form.Group as={Row} controlId={props.controlId} className='pb-3 mb-0'>
//             <Form.Label className='input-label' column xs='5' sm='3'>{props.title + (props.required ? '*' : '')}</Form.Label>

//             <Col xs='7' sm='9' className='d-flex'>
//                 <Form.Control as="select"
//                     className={!props.value ? 'selection-placeholder qt-input' : 'qt-input'}
//                     value={props.value}
//                     onChange={props.onChange}
//                     placeholder={props.placeholder ? props.placeholder : props.title}
//                     required={props.required}
//                 >
//                     <option disabled key={0} value={''} >{props.placeholder ? props.placeholder : props.title}</option>
//                     {options}
//                 </Form.Control>
//             </Col>
//         </Form.Group>
//     )
// }
