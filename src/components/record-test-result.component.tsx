/*
 * Corona-Warn-App / cwa-quick-test-frontend
 *
 * (C) 2021, T-Systems International GmbH
 *
 * Deutsche Telekom AG and all other contributors /
 * copyright owners license this file to you under the Apache
 * License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { Card, Form } from 'react-bootstrap';

import '../i18n';
import { useTranslation } from 'react-i18next';

import useNavigation from '../misc/navigation';
import utils from '../misc/utils';
import {usePostTestResult } from '../api';
import ITestResult from '../misc/test-result';
import CwaSpinner from './spinner/spinner.component';
import CardFooter from './modules/card-footer.component';
import CardHeader from './modules/card-header.component';
import { FormGroupInput } from './modules/form-group.component';
import TestResultInputs from './modules/test-result-inputs';

const RecordTestResult = (props: any) => {

    const navigation = useNavigation();
    const { t } = useTranslation();

    const [processNo, setProcessNo] = React.useState('');
    const [testResult, setTestResult] = React.useState<ITestResult>();
    const [testResultToPost, setTestResultToPost] = React.useState<ITestResult>();

    const [validated, setValidated] = React.useState(false);
    const [isInit, setIsInit] = React.useState(false)
    const [postInProgress, setPostInProgress] = React.useState(false);

    React.useEffect(() => {
        if (navigation)
            setIsInit(true);
    }, [navigation])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (form.checkValidity()) {
            // console.log(JSON.stringify(testResult));
            
            setPostInProgress(true);
            setTestResultToPost(testResult);
        }
    }

    const finishProcess = () => {
        props.setNotificationShow(true);
        navigation!.toLanding();
        setPostInProgress(false);
    }

    const handleCancel = () => {
        navigation?.toLanding();
    }

    const handleError = (error: any) => {
        let msg = '';

        if (error) {
            msg = error.message
        }
        props.setError({ error: error, message: msg, onCancel: navigation!.toLanding });
    }

    usePostTestResult(testResultToPost, processNo, finishProcess, handleError);

    return (!isInit ? <CwaSpinner /> :
        <>
            <Card id='data-card'>

                <Form className='form-flex' onSubmit={handleSubmit} validated={validated}>

                    <CardHeader title={t('translation:record-result2')} />

                    {/*
    content area with process number input and radios
    */}
                    <Card.Body id='data-body' className='pt-0'>
                        {/* process number input */}
                        < FormGroupInput controlId='formProcessInput' title={t('translation:process-number')}
                            value={processNo}
                            onChange={(evt: any) => setProcessNo(evt.currentTarget.value)}
                            required
                            min={utils.shortHashLen}
                            maxLength={utils.shortHashLen}
                            pattern={utils.pattern.processNo}
                        />
                        <hr />

                        <TestResultInputs onChange={setTestResult} />
                    </Card.Body>

                    {/*
    footer with cancel and submit button
    */}
                    <CardFooter
                        okText={t('translation:data-submit')}
                        handleCancel={handleCancel}
                        disabled={postInProgress}
                    />
                </Form>

            </Card>
        </>
    )
}

export default RecordTestResult;