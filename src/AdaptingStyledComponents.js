/*global chrome*/
import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import QRCode from "qrcode.react";

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: props =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
});

const MyQR = styled(({ color, ...other }) => <Button disabled={true} {...other} />)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
});

export default function AdaptingStyledComponents({value}) {
    return (
        <React.Fragment>
            <>
                <MyButton
                    size="small"
                    onClick={() => chrome.tabs.remove(value.Red)}
                    color="red">Delete</MyButton>
                <MyButton
                    color="blue"
                    onMouseOver={() => {value.mouseOverHandling()}}
                    onMouseOut={() => {value.mouseOutHandling()}}
                    >
                    QRコードを表示
                </MyButton>
                <MyQR>
                    {renderQrCode(value.Qr, value.Blue)}
                </MyQR>
            </>
        </React.Fragment>
    );
}

const renderQrCode = (showQr, url) => {
    if (showQr) {
        return (
            <>
                <QRCode value={url} size="48"/>
            </>
        )
    }
    return (
        <></>)
};
