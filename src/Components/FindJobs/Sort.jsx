import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from "@tabler/icons-react";
import { useDispatch } from 'react-redux';
import { updateSort } from '../../Slices/SortSlice';

const opt = ['Relevance','Most Recent','Salary: Low to High','Salary: High to Low'];
const talentSort=['Relevance','Most Recent','Experience: Low to High','Experience: High to Low']
const Sort=(props)=> {
  const dispatch=useDispatch()
    const [selectedItem, setSelectedItem] = useState('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort==="job"?opt.map((item) => (
    <Combobox.Option  value={item} key={item}>
      {item}
    </Combobox.Option>
  )):talentSort.map((item) => (
    <Combobox.Option  value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  return (
    <>


      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val));
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          
          <div onClick={()=>combobox.toggleDropdown()} className='flex text-sm md:text-lg items-center p-1 border border-red-800 rounded-xl'>
            {selectedItem }
            <IconAdjustments className='text-red-800 h-5 w-5'/>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Sort;