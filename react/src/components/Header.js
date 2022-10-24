import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <div className="grid grid-cols-5 gap-3">
        <div className="pt-6 pb-6 text-white text-3xl col-span-3">
          {this.props.title}
        </div>
        <div className="flex text-right items-center">
          <span className="text-white text-sm font-light w-[100%] mt-[21%]">THEME</span>
        </div>
        <div className="flex items-center">
            <div className="w-[79%]">
              <ul className="grid grid-cols-3 text-white text-center text-xs">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="rounded-full bg-[#252d44] pl-1">
                <button className="rounded-full bg-[#eb725d] w-4 h-4 mt-2"></button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header