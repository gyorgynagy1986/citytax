"use client";

import React, { useRef, useState, useEffect } from "react";
import style from "@/components/UI/NumberUp/NumberUp.module.css";

const NumberUp = ({ rolunk }) => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const numberRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const countingStartedRefs = [
    useRef(false),
    useRef(false),
    useRef(false),
    useRef(false),
  ];
  const intervals = [null, null, null, null];
  const observers = [null, null, null, null];

  const handleIntersection = (index) => (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countingStartedRefs[index].current) {
        startCounting(index);
        countingStartedRefs[index].current = true;
      }
    });
  };

  const startCounting = (index) => {
    intervals[index] = setInterval(() => {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        if (newNumbers[index] < getFinalValue(index)) {
          newNumbers[index] += 1;
        } else {
          clearInterval(intervals[index]);
        }
        return newNumbers;
      });
    }, 10);
  };

  const getFinalValue = (index) => {
    switch (index) {
      case 0:
        return 9;
      case 1:
        return 180;
      case 2:
        return 300;
      case 3:
        return 123;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    for (let i = 0; i < numberRefs.length; i++) {
      observers[i] = new IntersectionObserver(handleIntersection(i), options);

      if (numberRefs[i].current) {
        observers[i].observe(numberRefs[i].current);
      }
    }

    return () => {
      for (let i = 0; i < numberRefs.length; i++) {
        if (numberRefs[i].current) {
          observers[i].unobserve(numberRefs[i].current);
        }
      }
    };
  }, [numberRefs, observers]);

  return (
    <>
      <div
        className={`${style.counterContainer} ${
          rolunk && style.roulunkCounterContainer
        }`}
      >
        <div
          ref={numberRefs[0]}
          className={`${style.counterItem} ${
            rolunk && style.rolunkCounterItem
          }`}
        >
          <span>{numbers[0]} &nbsp;</span>
          <p>Munkatársak száma</p>
        </div>
        <div
          ref={numberRefs[1]}
          className={`${style.counterItem} ${
            rolunk && style.rolunkCounterItem
          }`}
        >
          <span>{numbers[1]} +</span>
          <p>Ügyfelek száma</p>
        </div>
        <div
          ref={numberRefs[2]}
          className={`${style.counterItem} ${
            rolunk && style.rolunkCounterItem
          }`}
        >
          <span>{numbers[2]} +</span>
          <p>Lezajlott adóellenőrzések </p>
        </div>
        <div
          ref={numberRefs[3]}
          className={`${style.counterItem} ${
            rolunk && style.rolunkCounterItem
          }`}
        >
          <span>{numbers[3]} +</span>
          <p>NAV ellenőrzések száma</p>
        </div>
      </div>
    </>
  );
};

export default NumberUp;
