import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


const textExample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et neque in tellus molestie pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus nisl eu sapien condimentum, et bibendum nisl mollis. Aliquam erat volutpat. Donec consectetur facilisis justo, dignissim elementum odio fermentum sit amet. Nullam eu quam hendrerit, aliquet enim ac, consequat tortor. Donec posuere erat quis placerat cursus. In sed enim at diam mattis commodo. Etiam viverra purus vel dictum finibus. Aliquam turpis erat, viverra at nulla eu, efficitur fringilla dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus at justo nec justo pharetra egestas vel quis ligula. In mollis facilisis magna, et viverra felis tincidunt quis. Praesent tincidunt rhoncus est. Fusce risus arcu, sollicitudin et velit sit amet, gravida eleifend nulla.

Donec rutrum iaculis pulvinar. Nulla non consectetur justo, in bibendum mi. Morbi vitae justo sit amet purus consequat eleifend. Suspendisse pulvinar feugiat urna, nec facilisis sem. Suspendisse laoreet et purus eget vestibulum. Pellentesque ut diam mattis, mattis odio in, mattis augue. Donec eu placerat felis, nec laoreet massa. Nam accumsan erat quis felis ultrices efficitur. Nullam consectetur massa sodales malesuada efficitur. Sed ut euismod nunc. Duis aliquet metus at sem suscipit varius. Fusce quis blandit libero. Aenean euismod augue nec feugiat malesuada. Etiam eget massa iaculis, consectetur justo quis, tempus tortor. Nunc ut suscipit nunc, ac elementum justo.

Sed accumsan mattis lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum at tempor purus. Ut ornare sem vitae ante mollis, in commodo massa ornare. Quisque consequat est tellus, eu commodo nibh imperdiet id. Nulla sit amet enim eu tellus iaculis tempor. Fusce sit amet finibus erat. Morbi pellentesque ullamcorper vestibulum.

Ut mattis consectetur quam non commodo. Mauris mollis at odio ut iaculis. Sed erat diam, hendrerit vitae dui ac, mattis ultricies neque. Nullam blandit dolor in finibus gravida. In egestas turpis justo, vitae sagittis magna lobortis et. Duis sagittis dolor eu enim sagittis auctor. Sed aliquet neque in tortor porttitor, ut consequat odio vehicula. Nunc sit amet feugiat odio, ac vehicula justo. Donec luctus diam eu magna hendrerit, vitae tempor orci rhoncus. Aenean porttitor neque mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus magna ex, fermentum in nisl vitae, pretium luctus mauris. Vivamus id augue at libero aliquet egestas. Donec vitae tellus quis nulla commodo fringilla. Ut commodo augue lectus, non faucibus mi viverra ut.

Integer scelerisque purus non auctor maximus. Ut eleifend, ante id feugiat sodales, arcu mauris consequat nulla, suscipit venenatis ligula magna quis sem. Quisque pretium elit sit amet augue suscipit aliquet. Sed varius malesuada sodales. Proin hendrerit cursus porttitor. Fusce quis orci a augue ultrices tristique a viverra orci. Suspendisse potenti. Ut pulvinar commodo libero, sed eleifend tellus suscipit a.

Ut in molestie elit. Aenean sed commodo arcu. Integer eget nibh porta, porttitor diam id, laoreet elit. Sed varius condimentum elit at luctus. Curabitur diam mi, varius ac est eu, maximus lacinia metus. Pellentesque ut egestas libero, id accumsan libero. Mauris malesuada mauris ut turpis ullamcorper faucibus ut dapibus risus. Nunc placerat dolor ac diam dapibus, sit amet blandit neque posuere. Nulla condimentum lobortis sapien, et dapibus sapien. Suspendisse sed ullamcorper eros, a auctor massa.

Nam eros urna, sodales et malesuada in, hendrerit sed lacus. Praesent scelerisque orci pulvinar, maximus ligula eget, feugiat odio. Vestibulum quis ligula in turpis semper fringilla sit amet id lorem. Curabitur ornare magna at nunc lacinia varius. Quisque nec elit enim. Sed viverra tortor et est placerat rutrum. Nam ipsum arcu, ornare sed mi eget, ornare semper ante. Proin libero nisl, posuere vel sapien nec, feugiat tempor tellus. Nullam varius, lectus ac sagittis semper, orci orci faucibus velit, non efficitur erat nulla a nibh. Suspendisse potenti.`;
//=====================================================

function FooterContainer(){
  return(
    <footer className="footer-container">

    </footer>
  );
}


//=====================================================

function SideMenu() {
  return (
    <aside className="side-menu">
      <NavbarItem text="qualquer" />
      <NavbarItem text="coisa" />
    </aside>
  );
}

//=====================================================
function MainContent() {
  return (
    <main className="main-content">
      <Title text="Meu primeiro título" />
      <TextContent text={textExample} />
    </main>
  );
}

function TextContent(props){
  return <p className="text-content">{props.text}</p>
}

//=====================================================
function PageContainer() {
  return (
    <div className="page-container">
      <SideMenu />
      <MainContent />
    </div>
  );
}

//=====================================================
function Title(props) {
  return <h1 className="title">{props.text}</h1>
}

const links = {
  home: '#',
  about: '#',
  services: '#',
  contact: '#'
};

function Navbar(props) {
  return (
    <nav className="navbar">
      <NavbarItem text="Home" />
      <NavbarItem text="Sobre" />
      <NavbarItem text="Serviços" />
      <NavbarItem text="Contato" />
    </nav>
  );

}

function NavbarItem(props) {
  return <li className="navbar-item"><a>{props.text}</a></li>
}

// ==============================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className="header-container">
      <Navbar />
    </div>
    <PageContainer/>
    <FooterContainer />
  </div>
);
