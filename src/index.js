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

import UniversalHeader from './components/universalheader/header';
import UniversalHeaderTitle from './components/universalheader/title';
import UniversalHeaderMainmenu from './components/universalheader/mainmenu';
import UniversalSecondaryHeader from './components/universalheader/secondaryheader';
import UniversalModal from './components/universalmodal/modal';
import UniversalModalTitle from './components/universalmodal/modaltitle';
import UniversalModalContent from './components/universalmodal/modalcontent';
import UniversalModalFooter from './components/universalmodal/modalfooter';
import UniversalFooter from './components/universalfooter/footer';
import UniversalFooterMini from './components/universalfooter/footermini';

import loadCurrencies from './utils/loadCurrencies';
import {validateEmail, isRequired, arrayIsRequired, validateDateRange, validateRoles, errorResponse} from './utils/validation';
import normalizeDecimal from './utils/normalizers/normalizeDecimal';
import normalizeDecimalSeperator from './utils/normalizers/normalizeDecimalSeperator';
import {Unit} from './utils/units';

import {
  Button,
  RenderInput,
  RenderCurrencyInput,
  RenderCheckbox,
  RenderTextarea,
  RenderStatic,
  RenderRadio,
  FormGroup,
  FormGroupTitle,
  FormGroupInputField,
  FormHint,
  RequiredInfo }  from './components/forms/inputs';


import Label from './components/forms/label';
import MainError from './components/forms/mainError';
import DatePicker from './components/forms/datePicker';
import DateRangePicker from './components/forms/dateRangePicker';
import StaffSelect from './components/forms/staffSelect';
import MultiSelect from './components/forms/multiSelect';
import { RenderSelect } from './components/forms/renderSelect';
import FileUpload from './components/forms/fileUpload';
import WizardNav from './components/forms/wizardNav';
import InlineError from './components/forms/inlineError';
import Info from './components/forms/info';
import CurrencyValue from './components/forms/currencyValue';
import InfoBar from './components/forms/infoBar';
import Progress from './components/progress/progress';
import Summary from './components/forms/summary';
import BankingDialog from './components/forms/bankingDialog/bankingDialog';
import BankingDialogInput from './components/forms/bankingDialog/bankingDialogInput';
import LargeLoaderOverlay from './components/loader/largeLoaderOverlay';
import DutyStationSelect from './components/forms/dutyStationSelect';
import Blockquote from './components/blockquote';


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
  Summary,
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
  Blockquote,
  CurrencyValue,
  FormGroup,
  Label,
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
  LargeLoaderOverlay,
  DutyStationSelect,
  Progress,
  BankingDialog,
  BankingDialogInput,
  loadCurrencies,
  validateEmail, isRequired, arrayIsRequired, validateDateRange, validateRoles, errorResponse,
  normalizeDecimal,
    normalizeDecimalSeperator,
    Blockquote
};
