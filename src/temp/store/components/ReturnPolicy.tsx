import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ReturnPolicy: React.FC = () => {
    return (
        <Card title='XYS Return Policy' className='p-shadow-2 m-5'>
            <p>
                At <strong>XYIAN Apparel</strong>, we want you to love your
                purchase. If you&apos;re not 100% satisfied with your clothing,
                you can return it within <strong>30 days</strong> of receiving
                your order.
            </p>
            <h3>Eligibility</h3>
            <ul className='p-pl-3'>
                <li>
                    Items must be unworn, unwashed, and in their original
                    condition.
                </li>
                <li>Tags must still be attached.</li>
                <li>Sale items are not eligible for return.</li>
            </ul>
            <h3>How to Return</h3>
            <ol className='p-pl-3'>
                <li>
                    Contact our support team to initiate the return process.
                </li>
                <li>
                    Package the item securely and include your order details.
                </li>
                <li>Ship it back using the provided return label.</li>
            </ol>
            <p>
                For further assistance, email us at&nbsp;
                <a href='mailto:support@xyian.com' className='underline'>
                    support@xyian.com
                </a>
                &nbsp;or call(or text)&nbsp;
                <strong>
                    <a href='tel:1-714-798-3048' className='underline'>
                        1-714-798-3048
                    </a>
                </strong>
                .
            </p>
            <div className='p-d-flex p-jc-center p-mt-3'>
                <Button
                    label='Contact Support'
                    icon='pi pi-envelope'
                    className='p-button-rounded'
                />
            </div>
        </Card>
    );
};

export default ReturnPolicy;
