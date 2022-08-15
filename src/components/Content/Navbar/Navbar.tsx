import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
export default function Navbar() {
    return (
        <div className={s.AppNavbar}>
            <h2 className={s.AppNavbarName}>RBE CONTENT:</h2>
            <nav className={s.AppNavbarMenu}>
                <ul className={s.AppNavbarList}>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/getting-started"
                    >
                        Getting Started
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/about-jsx"
                    >
                        About JSX
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/function-components"
                    >
                        Function Components
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/hooks"
                    >
                        Hooks
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/styling"
                    >
                        Styling
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/events-and-forms"
                    >
                        Events & Forms
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/testing"
                    >
                        Testing
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/context"
                    >
                        Context
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/advanced-hooks"
                    >
                        Advanced Hooks
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/custom-hooks"
                    >
                        Custom Hooks
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/routing"
                    >
                        Routing
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/class-components"
                    >
                        Class Components
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/hoc"
                    >
                        HOC
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/best-practices"
                    >
                        Best Practices
                    </NavLink>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? `${s.AppNavbarLinkActive}`
                                : `${s.AppNavbarLink}`
                        }
                        to="/final-words"
                    >
                        Final Words
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}
