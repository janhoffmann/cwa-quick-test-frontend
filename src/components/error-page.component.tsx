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
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'

import '../i18n';
import { useTranslation } from 'react-i18next';

import useNavigation from '../misc/navigation';
import { getPatientFromScan } from '../misc/qr-code-value';


const ErrorPage = (props: any) => {

    const navigation = useNavigation();
    const { t } = useTranslation();
    const [show, setShow] = React.useState(true);

    const handleClose = () => setShow(false);


    return (
        <>
            <Modal
            contentClassName='data-modal'
                show={props.message}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                >
                <Modal.Header id='data-header' className='pb-0' >
                    <Row>
                        <Col >
                            <Card.Title className='m-0 jcc-xs-jcfs-md' as={'h2'} >{t('translation:error-message')}</Card.Title>
                        </Col>
                    </Row>
                </Modal.Header>

                {/*
    content area with process number input and radios
    */}
                <Modal.Body className='py-0 bg-light'>
                    <hr/>
                    <p className='text-center'>
                        <span className='font-weight-bold'>{t('translation:serverError')}</span>
                        <span>{props.message}</span>
                    </p>

                    <hr/>
                </Modal.Body>

                {/*
    footer with cancel and submit button
    */}
                <Modal.Footer id='data-footer'>
                            <Button
                                className='py-0'
                                onClick={props.cancel}
                            >
                                {t('translation:cancel')}
                            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ErrorPage;