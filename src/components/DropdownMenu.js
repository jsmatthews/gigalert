import { Component } from 'react'
import { createPortal } from 'react-dom';
import { findChild } from '../helpers/ObjectHelpers'

export default class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.handleEventListener = this.handleEventListener.bind(this)

        this.appBody = document.getElementById("appBody")
        this.navbar = document.getElementById("navbar")

        this.dashboardLink = document.getElementById("dashboardLink");
        this.logOutLink = document.getElementById("logOutLink");

        this.root = document.getElementById(this.props.dropdownMenuRoot)
        const rootWidth = (this.root !== null) ? this.root.offsetWidth : 100

        this.dropdownContainer = document.createElement('div');
        this.dropdownContainer.className = "dropdown-container";

        this.triangleFront = document.createElement('div');
        this.triangleFront.className = "triangle-front";
        this.triangleFront.style.width = `${rootWidth}px`

        this.triangleBack = document.createElement('div');
        this.triangleBack.className = "triangle-back";
        this.triangleBack.style.width = `${rootWidth}px`

        this.dropdownEl = document.createElement('div');
        this.dropdownEl.className = "dropdown";
    }

    handleEventListener(e) {
        let result = findChild(this.dropdownContainer, e.target, -1);
        if (-1 !== result) return;

        this.props.hideMenu();
    }

    componentDidMount() {
        this.dropdownContainer.appendChild(this.triangleBack);
        this.dropdownContainer.appendChild(this.triangleFront);
        this.dropdownContainer.appendChild(this.dropdownEl);
        this.root.appendChild(this.dropdownContainer);

        document.addEventListener("click", this.handleEventListener)
    }

    componentWillUnmount() {
        this.root.removeChild(this.dropdownContainer)
        document.removeEventListener("click", this.handleEventListener)
    }

    render() {
        return createPortal(this.props.children, this.dropdownEl);
    }
}