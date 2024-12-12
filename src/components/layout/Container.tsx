import classNames from 'classnames';
import React from 'react';

interface ContainerProps {
    // 어떤 종류의 유효한 자식이든 받을 수 있음
    children: React.ReactNode;
    className?: string;
}

// 그리드 역할
const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={classNames('max-w-[1340px] px-5 md:px-8 mx-auto')}>{children}</div>;
};

// 사이트 전체를 감싸는 역할
export const Wrap: React.FC<ContainerProps> = ({ children }) => {
    return <div>{children}</div>;
};

// 섹션을 감싸는 역할
export const Section: React.FC<ContainerProps> = ({ children }) => {
    return (
        <section>
            <Container>{children}</Container>
        </section>
    );
};

export default Container;
