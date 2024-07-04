import React from 'react'

const Loading = () => {
    return (
        <div className=' h-[20vh] w-full overflow-hidden flex justify-center items-center'>
            <svg className=' w-full h-full object-cover' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><circle fill='#1F62FF' stroke='#1F62FF' strokeWidth='10' r='15' cx='35' cy='100'><animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='0'></animate></circle><circle fill='#1F62FF' stroke='#1F62FF' strokeWidth='10' opacity='.8' r='15' cx='35' cy='100'><animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='0.05'></animate></circle><circle fill='#1F62FF' stroke='#1F62FF' strokeWidth='10' opacity='.6' r='15' cx='35' cy='100'><animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.1'></animate></circle><circle fill='#1F62FF' stroke='#1F62FF' strokeWidth='10' opacity='.4' r='15' cx='35' cy='100'><animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.15'></animate></circle><circle fill='#1F62FF' stroke='#1F62FF' strokeWidth='10' opacity='.2' r='15' cx='35' cy='100'><animate attributeName='cx' calcMode='spline' dur='2' values='35;165;165;35;35' keySplines='0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1' repeatCount='indefinite' begin='.2'></animate></circle></svg>
        </div>
    )
}

export default Loading