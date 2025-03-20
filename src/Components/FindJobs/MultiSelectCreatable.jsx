import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Pill, PillsInput,Input, useCombobox } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';




const MultiSelectCreatable = (props) => {
  const dispatch=useDispatch();
  useEffect(()=>{
    setData(props.options)
  },[])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const exactOptionMatch = data .some((item) => item === search);

  const handleValueSelect = (val) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
      dispatch(updateFilter({[props.title]:[...value,search]}))
    } else {
      dispatch(updateFilter({[props.title]:value.includes(val)?value.filter((v)=>v!==val):[...value,val]}))
      setValue((current) =>
        (current || []).includes(val)? (current ?? []).filter((v) => v !== val): [...(current ?? []), val]
      );
    }
  };

  const handleValueRemove = (val) =>{
    setValue((current) => (current || []).filter((v) => v !== val));
    dispatch(updateFilter({[props.title]:value.filter((v)=>v!==val)}))
  }
  const values = value
  .slice(0,1)
  .map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill> 
  ));

  const options = (data || []).filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
  .map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        <Checkbox size='xs' color='red'
          checked={value.includes(item)}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span className=''>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox variant='unstyled' store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput variant='unstyled' onClick={() => combobox.toggleDropdown()} rightSection={<Combobox.Chevron/>} leftSection={<div className='p-1 bg-gray-200 text-gray-800  rounded-full'><props.icon/></div>} >
        <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill>+{value.length - 1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className='text-black ml-2 font-medium'>{props.title}</Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
      <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search "
          />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiSelectCreatable;
