import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core';

export default class MyFrom extends Component {
    render() {
        return (
            <div style={{
                ...this.props.style,
                position: "relative",
               // minHeight: "85%",
                pointerEvents: this.props.loading ? 'none' : 'auto'
            }}>
                {this.props.loading && (
                    <div style={{
                        top: 4,
                        left: 0,
                        zIndex: 4,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: " rgba(255, 255, 255, 0.8)"
                    }}>
                        <CircularProgress color="primary" />
                    </div>
                )}
                {this.props.children}
            </div>
        )
    }
} 
