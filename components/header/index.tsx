import Image from 'next/image'

import { SearchIcon } from '@heroicons/react/Outline'

const Header = () => (
	<div>
		<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
			<SearchIcon className="h-6 text-gray-600" />
			<input
				className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
				type="text"
				placeholder="Search CSS"
			></input>
		</div>
	</div>
)

export default Header
