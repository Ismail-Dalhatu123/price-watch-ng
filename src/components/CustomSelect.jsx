import React from 'react';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import getDarkClass from '../utils/getDarkClass';
import { useState } from 'react';
import { useEffect } from 'react';

function CustomSelect({ title, options = [], onSelect = () => {}, className }) {
    const [selected, setSelected] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [render, setRender] = useState(options)
    useEffect(() => {
        setRender(options)
    },[options])
    return (
        <div style={{position: 'relative'}}>
            <div style={{cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)} className={`select ${getDarkClass('dark_input_date')} ${className}`}>
                <span>{selected ? selected.label : title}</span>
                {isOpen ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
            </div>
            {isOpen && (<div className={`options_list sh ${getDarkClass('dark_option_list')}`}>
                <input onChange={(e) => setRender(options.filter(op => op.label.toLowerCase().includes(e.target.value.toLowerCase())))} type="text" placeholder="Search" />
                {render.map(opt => <h4 className={ selected && opt.value === selected.value ? 'option_active' : ''} onClick={() => {
                    setSelected(opt)
                    onSelect(opt.value)
                    setIsOpen(false)
                }} key={opt.value}>{opt.label}</h4>)}
            </div>)}
        </div>
    );
}

export default CustomSelect;