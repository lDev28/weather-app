import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

const Input: React.FC<InputProps> = ({ ...props }) => {
	return <input {...props} />
}
export default Input
