import * as React from "react";
import cx from "clsx";
import { scope } from "../lib/utils";

// function CountDisplay({ count, className }: CountDisplayProps) {
// 	let countString = String(Math.max(Math.min(count, 999), -99));
// 	return (
// 		<div className={cx(scope("count-display"), className)}>{countString}</div>
// 	);
// }

const CountDisplay: React.FunctionComponent<ICountDisplayProps> =
	function CountDisplay({ count, className }) {
		let countString = String(Math.max(Math.min(count, 999), -99));
		return (
			<div className={cx(scope("count-display"), className)}>{countString}</div>
		);
	};

CountDisplay.displayName = "Count Display";

export { CountDisplay };

interface ICountDisplayProps {
	count: number;
	className?: string;
}
