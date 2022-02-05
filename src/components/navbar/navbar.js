import React from "react";

const Navbar = () => {
	return (
		<>
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<img
								className="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<img
									className="hidden lg:block h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
									alt="Workflow"
								/>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="ml-3 relative">
								<div>
									<button
										type="button"
										className="bg-gray-800 flex text-sm focus:outline-none "
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span className="sr-only">
											Open user menu
										</span>
										<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
											Contribute on Github
										</button>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
