"use client"

import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Board() {
    const chessboardOptions = {

    };
    return <Chessboard options={chessboardOptions} />;
}