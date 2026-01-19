"use client";
import Button from "./button";
import Hyperlink from "./hyperlink";
import { ReactNode } from "react";

interface ServicesSectionProps {
	title: string;
	text: string | ReactNode;
	ctaText?: string;
	hyperlinkText?: string;
	hyperlink?: string;
	reverse?: boolean;
	onClick?: () => void;
}
const Service: React.FC<ServicesSectionProps> = ({
	title,
	text,
	ctaText,
	hyperlinkText,
	hyperlink,
	reverse = false,
	onClick,
}) => {
	return (
		<div
			className={`flex flex-col items-center gap-4 p-4 `}
		>
			<div className="w-full space-y-4">
				<div className="flex flex-col items-center gap-2">
					<h2 className="text-2xl font-bold text-center">{title}</h2>
				</div>
				<p className="text-center">{text}</p>
				{ctaText && (
					<Button
						text={ctaText}
						color="primary"
						onClick={() => {
							window.open(
								"https://airtable.com/app2OPYvNaoWHBYhg/pagQHtwSIRuWhV4L8/form",
								"_blank"
							);
						}}
					/>
				)}
				{hyperlinkText && hyperlink && (
					<Hyperlink
						text={hyperlinkText}
						url={hyperlink}
						className="text-white"
						underline={true}
						onClick={onClick}
					/>
				)}
			</div>
		</div>
	);
};

export default Service;
