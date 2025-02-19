import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import '../../i18n';
import { useTranslation } from 'react-i18next';
import utils from "../../misc/utils";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from 'date-fns/locale/de';

import { Sex } from "../../misc/enum";
import { IPersonData } from "../../misc/quick-test";
import { FormGroupInput, FormGroupSexRadio } from "./form-group.component";

registerLocale('de', de)

const PersonInputs = (props: any) => {

    const { t } = useTranslation();

    const [givenName, setGivenName] = React.useState<string>('');
    const [familyName, setFamilyName] = React.useState<string>('');

    const [standardisedGivenName, setStandardisedGivenName] = React.useState<string>('');
    const [standardisedFamilyName, setStandardisedFamilyName] = React.useState<string>('');

    const [dateOfBirth, setDateOfBirth] = React.useState<Date>();
    const [sex, setSex] = React.useState<Sex>();


    React.useEffect(() => {
        if (props && props.quickTest && props.quickTest.personData) {
            const personData = props.quickTest.personData;

            if (personData.givenName) {
                setGivenName(personData.givenName);
            }
            if (personData.standardisedGivenName) {
                setStandardisedGivenName(personData.standardisedGivenName);
            }
            if (personData.familyName) {
                setFamilyName(personData.familyName);
            }
            setStandardisedFamilyName(personData.standardisedFamilyName);

            if (personData.dateOfBirth) {
                setDateOfBirth(new Date(personData.dateOfBirth));
            }

            if (personData.sex) {
                setSex(personData.sex);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        const result: IPersonData = {
            givenName: givenName,
            familyName: familyName,
            standardisedGivenName: standardisedGivenName,
            standardisedFamilyName: standardisedFamilyName,
            dateOfBirth: dateOfBirth,
            sex: sex
        }

        props.onChange(result);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [givenName, familyName, standardisedGivenName, standardisedFamilyName, dateOfBirth, sex])


    const handleStandardisedNameChanged = (changedValue: string, setStandardisedName: (value: string) => void) => {
        const upperCaseChangedValue = changedValue.toUpperCase();

        if (utils.isStandardisedNameValid(upperCaseChangedValue)) {
            setStandardisedName(upperCaseChangedValue);
        }
    }

    const handleDateOfBirthChange = (evt: Date | [Date, Date] | null) => {
        const date = handleDateChange(evt);
        setDateOfBirth(date);
    }

    const handleDateChange = (evt: Date | [Date, Date] | null) => {
        let date: Date;

        if (Array.isArray(evt))
            date = evt[0];
        else
            date = evt as Date;

        if (date) {
            date.setHours(12);
        }

        return date;
    }

    return (
        <>
            {/* first name input */}
            < FormGroupInput controlId='formGivenNameInput' title={t('translation:first-name')}
                value={givenName}
                onChange={(evt: any) => setGivenName(evt.target.value)}
                required
                maxLength={50}
            />

            {/* name input */}
            < FormGroupInput controlId='formNameInput' title={t('translation:name')}
                value={familyName}
                onChange={(evt: any) => setFamilyName(evt.target.value)}
                required
                maxLength={50}
            />

            <hr />

            {/* standardised first name input */}
            <FormGroupInput controlId='formStandadisedGivenNameInput' title={t('translation:standardised-first-name')}
                value={standardisedGivenName}
                onChange={(evt: any) => handleStandardisedNameChanged(evt.target.value, setStandardisedGivenName)}
                required
                pattern={utils.pattern.standardisedName}
                maxLength={50}
            />

            {/*standardised name input */}
            <FormGroupInput controlId='formStandadisedNameInput' title={t('translation:standardised-name')}
                value={standardisedFamilyName}
                onChange={(evt: any) => handleStandardisedNameChanged(evt.target.value, setStandardisedFamilyName)}
                required
                pattern={utils.pattern.standardisedName}
                maxLength={50}
            />

            <hr />

            {/* date of birth input */}
            <Form.Group as={Row} controlId='formDateOfBirthInput' className='pb-3 mb-0'>
                <Form.Label className='input-label ' column xs='5' sm='3'>{t('translation:date-of-birth') + '*'}</Form.Label>

                <Col xs='7' sm='9' className='d-flex'>
                    <DatePicker
                        selected={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        locale='de'
                        dateFormat={utils.pickerDateFormat}
                        isClearable
                        placeholderText={t('translation:date-of-birth')}
                        className='qt-input form-control'
                        wrapperClassName='align-self-center'
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date()}
                        minDate={new Date(1900, 0, 1, 12)}
                        openToDate={new Date(1990, 0, 1)}
                        required
                    />
                </Col>
            </Form.Group>

            {/* sex input */}
            <Row>
                <Form.Label className='input-label txt-no-wrap' column xs='5' sm='3'>{t('translation:sex') + '*'}</Form.Label>

                <Col xs='7' sm='9' className='d-flex'>
                    <Row>
                        <FormGroupSexRadio controlId='sex-radio1' name="sex-radios" title={t('translation:male')}
                            checked={sex === Sex.MALE}
                            onChange={() => setSex(Sex.MALE)}
                        />

                        <FormGroupSexRadio controlId='sex-radio2' name="sex-radios" title={t('translation:female')}
                            checked={sex === Sex.FEMALE}
                            onChange={() => setSex(Sex.FEMALE)}
                            required={true}
                        />

                        <FormGroupSexRadio controlId='sex-radio3' name="sex-radios" title={t('translation:diverse')}
                            checked={sex === Sex.DIVERSE}
                            onChange={() => setSex(Sex.DIVERSE)}
                        />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PersonInputs;