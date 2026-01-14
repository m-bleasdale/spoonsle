'use client';

import { Pub } from "@/types/pub";
import { GameInput } from "./game-input";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import crypto from "crypto";

function getRandomIndex(length : number) {
    const randomBytes = crypto.randomBytes(4);
    const randomInt = randomBytes.readUInt32BE(0);
    return randomInt % length;
}

function shuffleArray<T>(arr: T[]): T[] {
    const array = [...arr]; // copy so we don't mutate original
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomIndex(i + 1); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

export default function Game ({data, selectedIndex} : {data : Pub[], selectedIndex: any}) {
    const [mistakes, setMistakes] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState (false);
    const [pubs, setPubs] = useState<Pub[]>(data);

    const indexes = [0,1,2,3,4];
    const imageOrder = shuffleArray(indexes);
    const images = data[selectedIndex].images;

    const [currentImage, setCurrentImage] = useState(0);
    const next = () =>
        setCurrentImage((prev) => (prev < mistakes.length ? prev + 1 : prev));
    const prev = () =>
        setCurrentImage((prev) => (prev > 0 ? prev - 1 : prev));

    function handleSubmit (guess: string) {
        if (guess !== `${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`){
            setMistakes(prev => [...prev, guess]);
            const items = guess.split(",").map(s => s.trim());

            setCurrentImage(mistakes.length);

            setPubs(pubs.filter(pub =>
                !(pub.name === items[0] && pub.area === items[1] && pub.city === items[2])
            ));

            if(mistakes.length + 1 === 5) setGameOver(true);

        }
        else {
            setGameOver(true);
            setWin(true);
        }
    }

    return (
        <div className="w-80 md:w-150 flex flex-col items-center gap-5">
            <div className="flex gap-2 flex-col w-80 md:w-150 h-120 rounded-md">
                <img
                    src={images[imageOrder[currentImage]]}
                    alt="Image to guess"
                    className="object-cover h-110 w-full border-2 rounded-md"
                />

                {mistakes.length > 0 && (
                    <div className="flex gap-2 justify-center items-center">
                        {currentImage + 1}
                        /
                        {mistakes.length + 1}
                        <Button
                            variant="outline"
                            onClick={prev}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={next}
                        >
                            Next
                        </Button>
                    </div>
                )}

            </div>

            {mistakes.map((mistake, i) => (
                <div 
                    key={i}
                    className="rounded-md flex flex-row w-80 md:w-110 h-15 px-5 bg-red-700 text-white font-medium items-center justify-between text-lg"
                >
                    {mistake}
                    <X size={32} strokeWidth={4} color="#ffffff"/>
                </div>
            ))}

            {(gameOver && win) &&
                <div 
                    className="rounded-md flex flex-row w-80 md:w-110 h-15 px-5 bg-green-700 text-white font-medium items-center justify-between text-lg"
                >
                    {`${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`}
                    <Check size={32} strokeWidth={4} color="#ffffff"/>
                </div>
            }

            {(gameOver && !win) &&
                <div 
                    className="border-2 rounded-md flex bg-white flex-row w-80 md:w-110 h-15 px-5 items-center justify-between text-lg"
                >
                    <p>It was <span className="font-bold">{`${data[selectedIndex].name}, ${data[selectedIndex].area}, ${data[selectedIndex].city}`}</span></p>
                </div>
            }

            {gameOver && 
                <a href="/">
                    <Button>
                        Play Again
                    </Button>
                </a>
            }

            {!gameOver &&
                <GameInput pubs={pubs} onGuess={handleSubmit}/>
            }

            {!gameOver &&
            
            [...Array(5 - 1 - mistakes.length)].map((_, i) => (
                <div
                    key={i}
                    className="border-2 rounded-md flex flex-row w-80 md:w-110 h-15 bg-white text-white font-medium items-center justify-between text-lg"
                />
            ))}


        </div>
    )
}