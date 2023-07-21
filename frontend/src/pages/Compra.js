import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom"

function Compra() {
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <>
            <Header />
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
            <Footer />
        </>
    );
}

export default Compra; 