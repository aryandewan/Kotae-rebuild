"use client"
import React, {useState} from 'react'
import {chatData as initialChatData} from "@/data/data";

const ChatWindow = () => {
    const [questions, setQuestions] = useState(initialChatData);
    const [activeQnA, setActiveQnA] = useState<{ question: string; answer: string } | null>(null);
    const [isAnswering, setIsAnswering] = useState(false);

    const handleQuestionClick = (index: number) => {
        const selected = questions[index];
        setActiveQnA({ question: selected.question, answer: "" });
        setIsAnswering(true);


        setTimeout(() => {
            setActiveQnA(selected);
            setIsAnswering(false);

            setTimeout(() => {
                const remaining = questions.filter((_, i) => i !== index);
                setQuestions(remaining);
                setActiveQnA(null);
            }, 10000);
        }, 1000);
    };

    return (
        <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden pointer-events-auto">
            <div className="bg-[#653EFE] text-white px-4 py-3 text-lg font-semibold">
                Ask Kotae a Question
            </div>

            <div className="max-h-[400px] overflow-y-auto px-4 py-3 space-y-4">
                {!activeQnA ? (
                    <div className="flex flex-wrap gap-2">
                        {questions.map((chat, index) => (
                            <button
                                key={index}
                                onClick={() => handleQuestionClick(index)}
                                className="text-left bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-black"
                            >
                                {chat.question}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2">
                        <div className="self-end bg-blue-100 px-3 py-2 rounded-lg text-sm text-gray-800">
                            {activeQnA.question}
                        </div>
                        {isAnswering ? (
                            <div className="self-start bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-500 animate-pulse">
                                Typing answer...
                            </div>
                        ) : (
                            <div className="self-start bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800">
                                {activeQnA.answer}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ChatWindow
