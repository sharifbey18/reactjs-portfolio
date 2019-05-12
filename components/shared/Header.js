import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

    render() {
        debugger;
        const title = this.props.title;
        return (
            <React.Fragment>
                <p>{title}</p>
                {this.props.children}
                <Link href="/">
                    <a>Home Page</a>
                </Link>
                <Link href="/about">
                    <a>About Page</a>
                </Link>
                <Link href='/portfolio'>
                    <a>Portfolio</a>
                </Link>
                <Link href='/blogs'>
                    <a>Blogs</a>
                </Link>
                <Link href='/cv'>
                    <a>CV</a>
                </Link>
                <style jsx>
                    {`
                        a{
                            font-size: 20px
                        }
                    `}
                </style>
            </React.Fragment>
        )
    }
}

export default Header;