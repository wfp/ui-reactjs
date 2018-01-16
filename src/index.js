import LinkTo from './components/linkto';
import Banner from './components/banner';
//import Header from './components/header';
import CorporateStrip from './components/corporatestrip';
import LinkMenuItem from './components/linkmenuitem';
//import LogoItem from './components/logoitem';
//import SearchWidget from './components/searchwidget';
import SearchWidget from './components/universalheader/search';
import UserMenuWidget from './components/usermenuwidget';
import Breadcrumbs from './components/breadcrumbs';
import Paginator from './components/paginator';
import FilterPanel from './components/filterpanel';
import DateWidget from './components/datewidget';

import StatusDot from './components/StatusDot';
import StatusEdge from './components/StatusEdge';
import {Tab, Tabs} from './components/tabs';

import {
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem
} from './components/table';
import WfpActionButton from './components/wfpActionButton';
import MultipleActionsButton from './components/multipleActionsButton';
import TableDropdownMenu from './components/TableDropdownMenu';
import TableDropdownModal from './components/TableDropdownModal';

//import WfpStyle from 'wfp-ui/dist/css/wfpui+grid.css';
import WssStyle from './styles/main.scss';

import UniversalHeader from './components/universalheader/header.jsx';
import UniversalHeaderTitle from './components/universalheader/title.jsx';
import UniversalHeaderMainmenu from './components/universalheader/mainmenu.jsx';
import UniversalSecondaryHeader from './components/universalheader/secondaryheader.jsx';
import UniversalModal from './components/universalmodal/modal.jsx';
import UniversalModalTitle from './components/universalmodal/modaltitle.jsx';
import UniversalModalContent from './components/universalmodal/modalcontent.jsx';
import UniversalModalFooter from './components/universalmodal/modalfooter.jsx';
import UniversalFooter from './components/universalfooter/footer.jsx';
import UniversalFooterMini from './components/universalfooter/footermini.jsx';

import loadCurrencies from './utils/loadCurrencies.jsx';
import {validateEmail, isRequired, arrayIsRequired, validateDateRange, validateRoles, errorResponse} from './utils/validation.jsx';
import normalizeDecimal from './utils/normalizers/normalizeDecimal.jsx';
import normalizeDecimalSeperator from './utils/normalizers/normalizeDecimalSeperator.jsx';
import {Unit} from './utils/units.jsx';

import {
  Button,
  RenderInput,
  RenderCurrencyInput,
  RenderCheckbox,
  RenderTextarea,
  RenderSelect,
  RenderStatic,
  RenderRadio,
  FormGroup,
  FormGroupTitle,
  FormGroupInputField,
  FormHint,
  RequiredInfo }  from './components/forms/inputs.jsx';


import Label from './components/forms/label.jsx';
import MainError from './components/forms/mainError.jsx';
import DatePicker from './components/forms/datePicker.jsx';
import DateRangePicker from './components/forms/dateRangePicker.jsx';
import StaffSelect from './components/forms/staffSelect.jsx';
import MultiSelect from './components/forms/multiSelect.jsx';
import FileUpload from './components/forms/fileUpload.jsx';
import WizardNav from './components/forms/wizardNav.jsx';
import FormActions from './components/forms/formActions.jsx';
import InlineError from './components/forms/inlineError.jsx';
import Info from './components/forms/info.jsx';
import CurrencyValue from './components/forms/currencyValue.jsx';
import InfoBar from './components/forms/infoBar.jsx';
import Progress from './components/progress/progress.jsx';


module.exports = {
  LinkTo,
  Banner,
  Button,
  //Header,
  CorporateStrip,
  DatePicker,
  DateRangePicker,
  LinkMenuItem,
  //LogoItem,
  SearchWidget,
  UserMenuWidget,
  Breadcrumbs,
  Paginator,
  FilterPanel,
  DateWidget,
  StatusDot,
  StatusEdge,
  Tab,
  Tabs,
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem,
  WfpActionButton,
  MultipleActionsButton,
  TableDropdownMenu,
  TableDropdownModal,
  UniversalHeader,
  UniversalHeaderTitle,
  UniversalHeaderMainmenu,
  UniversalSecondaryHeader,
  UniversalModal,
  UniversalModalTitle,
  UniversalModalContent,
  UniversalModalFooter,
  UniversalFooter,
  UniversalFooterMini,
  RenderInput,
  FileUpload,
  RenderCurrencyInput,
  RenderCheckbox,
  RenderTextarea,
  RenderSelect,
  RenderStatic,
  RenderRadio,
  StaffSelect,
  MultiSelect,
  CurrencyValue,
  FormGroup,
  Label,
  FormActions,
  FormGroupTitle,
  FormGroupInputField,
  FormHint,
  MainError,
  RequiredInfo,
  WizardNav,
  InlineError,
  Info,
  InfoBar,
  Unit,
  Progress,
  loadCurrencies,
  validateEmail, isRequired, arrayIsRequired, validateDateRange, validateRoles, errorResponse,
  normalizeDecimal,
  normalizeDecimalSeperator
};
