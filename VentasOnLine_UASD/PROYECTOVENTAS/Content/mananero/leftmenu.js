/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v2.4
   http://deluxe-menu.com
*/


// -- Deluxe Tuner Style Names
var itemStylesNames=["Subitem",];
var menuStylesNames=[""];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal=0;
var smColumns=1;
var smOrientation=0;
var smViewType=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="link";
var blankImage="leftmenu.files/blank.gif";
var pathPrefix_img="";
var pathPrefix_link="";

//--- Dimensions
var menuWidth="158px";
var menuHeight="";
var smWidth="153px";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="10px";
var posY="10px";
var topDX=0;
var topDY=2;
var DX=-7;
var DY=-5;

//--- Font
var fontStyle="normal 9px Arial";
var fontColor=["#FFFFFF","#091B2D"];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#FFFFFF";
var menuBackImage="";
var menuBackRepeat="no-repeat";
var menuBorderColor="#EEEEEE #AAAAAA #AAAAAA #FFFFFF";
var menuBorderWidth=2;
var menuBorderStyle="groove";

//--- Item Appearance
var itemBackColor=["",""];
var itemBackImage=["leftmenu.files/btn_01.gif","leftmenu.files/btn_02.gif"];
var itemBorderWidth=0;
var itemBorderColor=["",""];
var itemBorderStyle=["solid","solid"];
var itemSpacing=1;
var itemPadding="3px";
var itemAlignTop="right";
var itemAlign="right";
var subMenuAlign="right";

//--- Icons
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=16;
var iconHeight=16;
var arrowWidth=11;
var arrowHeight=11;
var arrowImageMain=["leftmenu.files/arrv_white_1.gif",""];
var arrowImageSub=["leftmenu.files/arr_white_1.gif",""];

//--- Separators
var separatorImage="leftmenu.files/sep_white2.gif";
var separatorWidth="158px";
var separatorHeight="5px";
var separatorAlignment="left";
var separatorVImage="leftmenu.files/sepv_blue.gif";
var separatorVWidth="5px";
var separatorVHeight="18px";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="80";
var transition=5;
var transOptions="";
var transDuration=150;
var transDuration2=100;
var shadowLen=12;
var shadowColor="#000000";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var smShowPause=30;
var smHidePause=300;
var smSmartScroll=1;
var topSmartScroll=0;
var smHideOnClick=1;
var dm_writeAll=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;

//--- Dynamic Menu
var dynamic=0;

//--- Keystrokes Support
var keystrokes=1;
var dm_focus=1;
var dm_actKey=113;

var itemStyles = [
    ["itemBackColor=#2A78C3,#FAF48F"],
];

var menuStyles = [
    ["menuBackColor=#FFFFFF"],
];

/*var menuItems = [

    ["Home","testlink.html", "", "", "", "", "", "", "", ],
    ["Product Info","", "", "", "", "", "", "", "", ],
        ["|Features","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Installation","", "", "", "", "", "0", "", "", ],
            ["||Description of Files","testlink.html", "", "", "", "", "0", "", "", ],
            ["||How To Setup","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Parameters Info","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Dynamic Functions","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Supported Browsers","", "", "", "", "", "0", "", "", ],
            ["||Windows OS","", "", "", "", "", "0", "", "", ],
            ["||Internet Explorer","", "", "", "", "", "0", "", "", ],
            ["||Firefox","", "", "", "", "", "0", "", "", ],
            ["||Mozilla","", "", "", "", "", "0", "", "", ],
            ["||Netscape","", "", "", "", "", "0", "", "", ],
            ["||Opera","", "", "", "", "", "0", "", "", ],
            ["||MAC OS","", "", "", "", "", "0", "", "", ],
            ["||Firefox","", "", "", "", "", "0", "", "", ],
            ["||Safari","", "", "", "", "", "0", "", "", ],
            ["||Internet Explorer","", "", "", "", "", "0", "", "", ],
            ["||Unix/Linux OS","", "", "", "", "", "0", "", "", ],
            ["||Firefox","", "", "", "", "", "0", "", "", ],
            ["||Konqueror","", "", "", "", "", "0", "", "", ],
    ["Samples","", "", "", "", "", "", "", "", ],
        ["|Sample 1","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 2 is Disabled","testlink.html", "", "", "", "_", "0", "", "", ],
        ["|Sample 3","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 4","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 5","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 6","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 7","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 8","testlink.html", "", "", "", "", "0", "", "", ],
        ["|Sample 9","testlink.html", "", "", "", "", "0", "", "", ],
    ["Purchase","http://deluxe-menu.com/order-purchase.html", "", "", "", "_blank", "", "", "", ],
    ["Contact Us","testlink.htm", "", "", "", "", "", "", "", ],
];

dm_initFrame("frmPrincipal", 0, 1, 1);*/