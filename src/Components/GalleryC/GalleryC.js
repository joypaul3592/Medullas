import React, { useEffect, useState } from 'react';
import './GalleryC.css'
import Simg1 from '../../Assect/Simg1.jpg'
import Simg2 from '../../Assect/Simg2.jpg'
import Simg3 from '../../Assect/Simg3.jpg'
import Simg4 from '../../Assect/Simg4.jpg'
import Simg5 from '../../Assect/Simg5.jpg'
import Simg6 from '../../Assect/Simg6.jpg'
import { SiPointy } from 'react-icons/si';




const COLUMNS = 3;
const WIDTH = 300;
const HEIGHT = 200;

const images = [
    Simg1,
    Simg4,
    Simg5,
    Simg6,
    Simg2,
    Simg3
];

const chunkArray = (myArray, chunkSize) => {
    const arrayLength = myArray.length;
    const tempArray = [];

    for (let index = 0; index < arrayLength; index += chunkSize) {
        tempArray.push(myArray.slice(index, index + chunkSize));
    }

    return tempArray;
};

const rotations = {};

const GalleryC = () => {
    const [isHover, setIsHover] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const rows = chunkArray(images, COLUMNS);
    const rowsCount = rows.length;

    useEffect(() => {
        setRotations();
        setIsFirstRender(false);
    }, [isHover]);

    const toggleHover = () => setIsHover(!isHover);

    const getCenter = (row, col) => {
        const rowOffset = rowsCount / 2 - row;
        let translateY = rowOffset * (HEIGHT + 60) + rowOffset * 50;

        if (!(rowsCount % 2)) {
            if (!translateY) {
                translateY -= 155;
            } else {
                translateY /= 2;
            }
        }

        const colOffset = Math.floor(COLUMNS / 2 - col);
        let translateX =
            colOffset * (WIDTH + 40) +
            (colOffset * (1200 - (WIDTH + 40) * COLUMNS)) / COLUMNS;
        return {
            translateY,
            translateX
        };
    };

    const setRotations = () => {
        const shuffleArray = (arr) =>
            arr
                .map((a) => [Math.random(), a])
                .sort((a, b) => a[0] - b[0])
                .map((a) => a[1]);

        let indices = shuffleArray(Array.from(Array(images.length).keys()));

        rows.forEach((row, i) =>
            row.forEach((col, j) => {
                const getRandom = (min, max) =>
                    Math.floor(Math.random() * (max - min + 1) + min);

                const centre = getCenter(i, j);
                let translateY = centre.translateY;
                const translateYTolerance = (HEIGHT + 60) * 0.5;
                translateY += getRandom(-translateYTolerance, translateYTolerance);

                let translateX = centre.translateX;
                const translateXTolerance = (WIDTH + 40) * 0.5;
                translateX += getRandom(-translateXTolerance, translateXTolerance);

                rotations[`${i},${j}`] = {
                    row: translateY,
                    col: translateX,
                    rot: getRandom(-60, 60),
                    zIndex: indices.splice(0, 1)
                };
            })
        );
    };

    const getPostcardStyle = (row, col) => {
        return {
            width: `${WIDTH + 40}px`,
            height: `${HEIGHT + 60}px`,
            transform: `translateX(${rotations[`${row},${col}`]?.col
                }px) translateY(${rotations[`${row},${col}`]?.row}px) rotateZ(${rotations[`${row},${col}`]?.rot
                }deg)`
        };
    };

    return (
        <div className=' max-w-7xl mx-auto px-5 relative'>

            <h1 className=' text-3xl font-bold text-purple-600 text-center mt-4'>ফটো গ্যালারি</h1>



            <div className={` h-full lg:inline hidden  ${isHover ? 'gallery-display' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <div>
                    {rows.map((row, rowIndex) => (
                        <div className='gallery__row  mt-10' key={rowIndex}>
                            {row.map((image, imageIndex) => (
                                <div className='gallery__row__image ' style={{ width: `${100 / COLUMNS}%` }} key={imageIndex}>
                                    <div className='postcard ' style={!isFirstRender ? getPostcardStyle(rowIndex, imageIndex) : {}}>
                                        <div className='postcard__front'>
                                            <div className=' '>
                                                <img src={image} alt={imageIndex} />
                                            </div>
                                            <div>
                                                <h1 className=' text-sm mt-2.5'>ফটো গ্যালারি - ২০২২</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>



            <div className=' my-20'>
                <div className=' flex items-center  gap-3 text-3 text-lg font-bold '>
                    <SiPointy className=' text-purple-600' />
                    <h1>সমাপনী ও পুরস্কার বিতরণী অনুষ্ঠান ২০২২</h1>
                </div>

                <div className=' grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                    {
                        images.map(i =>
                            <img className=' rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out' src={i} alt="images" />
                        )
                    }
                </div>


            </div>


        </div>
    )
};
export default GalleryC;



