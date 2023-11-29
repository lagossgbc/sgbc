import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput = () => {
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined className="site-form-item-icon" />}
    />
  )
};

export default SearchInput;