// idInputBox, PasswordInputBox 함수형 컴포넌트 생성
// 각각의 컨포넌트는 모두 export 가능하도록 내보내기
import React from 'react';

export function IdInputBox() {

    const label = '아이디';
    const type = 'text';
    const placeholder = '아이디를 입력해주세요.';

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type}
                placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
);
}

export function PasswordInputBox() {

    const label = '비밀번호';
    const type = 'password';
    const placeholder = '비밀번호를 입력해주세요.';

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type}
                placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
);
}

interface Props {
    label: string;
    type: 'text'| 'password';
    placeholder: string;
}
export default function InputBox({label, type, placeholder}: Props) {

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type}
                placeholder={placeholder} />
            </div>
            <div className="input-message"></div>
        </div>
);
}
