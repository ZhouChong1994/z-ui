import Button from '../../packages/mobile-components/button';
import Select from '../../packages/mobile-components/select';

import common from "@/controller/common";

export default class {
	static getComponent() {
		return Object.assign(common, {
			Button,
			Select
		})

	}
}