"use client";
import React, { useState, useEffect, useRef } from "react";

declare global {
    interface Window {
        SpeechRecognition: new () => ISpeechRecognition;
        webkitSpeechRecognition: new () => ISpeechRecognition;
    }

    interface ISpeechRecognition {
        lang: string;
        continuous: boolean;
        interimResults: boolean;
        onresult: (event: ISpeechRecognitionEvent) => void;
        onerror: (event: ISpeechRecognitionError) => void;
        start(): void;
        stop(): void;
    }

    interface ISpeechRecognitionEvent {
        resultIndex: number;
        results: ISpeechRecognitionResultList;
    }

    interface ISpeechRecognitionResultList {
        length: number;
        item(index: number): ISpeechRecognitionResult;
        [index: number]: ISpeechRecognitionResult;
    }

    interface ISpeechRecognitionResult {
        isFinal: boolean;
        0: ISpeechRecognitionAlternative;
    }

    interface ISpeechRecognitionAlternative {
        transcript: string;
    }

    interface ISpeechRecognitionError {
        error: string;
    }
}

const VoiceRecognition: React.FC = () => {
    const [finalTranscript, setFinalTranscript] = useState("");
    const [interimTranscript, setInterimTranscript] = useState("");
    const recognitionRef = useRef<ISpeechRecognition | null>(null);
    useEffect(() => {
        if (
            !("webkitSpeechRecognition" in window) &&
            !("SpeechRecognition" in window)
        ) {
            alert("API de reconocimiento de voz no soportada en este navegador.");
        } else {
            recognitionRef.current = new (window.SpeechRecognition ||
                window.webkitSpeechRecognition)();
            const recognition = recognitionRef.current;
            recognition.lang = "es-ES";
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onresult = (event: ISpeechRecognitionEvent) => {
                let interimText = "";

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        setFinalTranscript(
                            (prevTranscript) =>
                                prevTranscript + event.results[i][0].transcript + "\n"
                        );
                    } else {
                        interimText += event.results[i][0].transcript;
                    }
                }
                setInterimTranscript(interimText);
            };

            recognition.onerror = (event: ISpeechRecognitionError) => {
                console.error("Error de reconocimiento de voz:", event.error);
            };
        }
    }, []);

    const startRecognition = () => {
        recognitionRef.current?.start();
        setFinalTranscript("");
        setInterimTranscript("");
    };

    const stopRecognition = () => {
        recognitionRef.current?.stop();
    };

    return (
        <div className="w-full h-full bg-white flex justify-between items-center rounded-lg text-black font-semibold">
            <button
                className="w-[150px] max-h-[70px] border-green-400 bg-green-200 border-4 rounded-l-lg"
                onClick={startRecognition}
            >
                Comenzar grabación
            </button>
            <div id="results" className="w-full px-4">
                <h3 className="text-2xl">{finalTranscript}</h3>
                <em style={{ color: "gray" }}>{interimTranscript}</em>
            </div>
            <button
                className="w-[150px] max-h-[70px] border-red-400 bg-red-200 border-4 rounded-r-lg"
                onClick={stopRecognition}
            >
                Detener grabación
            </button>
        </div>
    );
};

export default VoiceRecognition;
