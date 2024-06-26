import React from 'react'

// 조건부 랜더링 :
// - 상황(조건)에 따라서 결과를 다르게 랜더링 하려고 할때 사용하는 방법
// - if, &&, ? : 을 사용하는 방법이 존재

function IfComponent({ number }: { number: number }) {
    // if문을 이용한 조건부 랜더링 방법
    // - 함수(컴포넌트 함수) 내부에서 return을 다르게 주는 방법

    // ex number가 양수면 number 값을 h1이면서 빨간색으로 표시
    if (number > 0) return (
        <h1 style={{ color: 'red' }}>{number}</h1>
    )
    // 음수이면 number 값을 h3이면서 파란색으로 표시
    // 위에서 결과값이 맞을 때 다음 검사를 하지 않기 위해 else if 사용
    else if (number < 0) return (
        <h3 style={{ color: 'blue' }}>{number}</h3>
    )
    // 0이면 number 값을 h2이면서 초록색으로 표시
    else return (
        <h2 style={{ color: 'green' }}>{number}</h2>
    )
}

function AndComponent({ number }: { number: number }) {
    // && 연산자를 이용한 조건부 랜더링
    // - JSX 내부(return)에서 상황(조건)에 따라 다른 랜더링을 결정하고 싶을 때 사용

    // ex) 만약 number가 양수면 '양수'를 랜더링
    // if(number > 0) return '양수';
    // 양수가 아니면 '양수가 아님' 랜더링
    // if(number <= 0) return '양수가 아님';
    // if(numbnr > 0) return '양수가 아님';
    return (
        <h1>
            {number > 0 && '양수'}
            {number <= 0 && '양수가 아님'}
            {/* {number > 0 || '양수가 아님'} */}
        </h1>
    )
}

function ThreeTermComponent({ number }: { number: number }) {
    // 삼항 연산자(? :)를 이용한 조건부 랜더링
    // JSX 내부에서 (return 안) 상황(조건)에 따라서 서로 다른 랜더링을 하고 싶을 때 사용

    // ex) number가 양수면 '양수', 음수면 '음수', 0이면 '영'
    return(
        <h1>
            {number > 0 ? '양수' 
            : number < 0 ? '음수' 
            : '영'}
        </h1>
    )
}
export default function ConditionalRedering() {
    return (
        <>
            <IfComponent number={5} />
            <IfComponent number={-4} />
            <IfComponent number={0} />

            <AndComponent number={1} />
            <AndComponent number={0} />

            <ThreeTermComponent number={1} />
            <ThreeTermComponent number={0} />
            <ThreeTermComponent number={-1} />
        </>
    )
}
