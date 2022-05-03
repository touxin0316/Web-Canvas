# Software Studio 2020 Spring
## Assignment 01 Web Canvas


### Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Basic control tools                              | 30%       | Y         |
| Text input                                       | 10%       | Y         |
| Cursor icon                                      | 10%       | Y         |
| Refresh button                                   | 10%       | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Different brush shapes                           | 15%       | Y         |
| Un/Re-do button                                  | 10%       | Y         |
| Image tool                                       | 5%        | Y         |
| Download                                         | 5%        | Y         |

| **Other useful widgets**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Name of widgets                                  | 1~5%     | Y         |


---

### How to use 
     
    我在web canvas中實做了約18個功能
    
    這是使用介面 :  (建議網頁縮放大小67%會比較好使用，工具箱不會跑到下面，畫布也夠大)
![](https://i.imgur.com/IuTgwXq.jpg)

    使用敘述如下 : 
    
    1. 調色盤
    可以讓使用者選擇顏色來繪製線條，形狀，打字的工具。
    除了調色盤外，還有漸層功能可以上色，會在下面做說明。
    預設的顏色是粉紅色。
    
    2. 畫筆大小
    調色盤下方有一個滑桿，可以用來調整畫筆及形狀線條等等的粗細程度。
    
    3 . 普通的畫圖
    在右手邊的表格的最左上角有如下的圖示 :
![](https://i.imgur.com/uUPGoJV.png)

    點擊後即可根據調色盤中選擇的顏色及滑桿中調整畫筆大小進行普通的畫圖。
    
    4. 橡皮擦
    點擊以下圖示 :
![](https://i.imgur.com/a1EOCHZ.png)
    
    可以根據滑桿選擇的筆刷大小來清除圓範圍內的所有塗鴉。
    
    5. 打字
    在打字之前，滑桿下有三個方格，分別可以讓使用者調整文字大小、選擇字型跟輸入文字內容。
    都調整好了之後，點擊以下圖示 :
![](https://i.imgur.com/YK0oUmH.png)

    就可以繪製輸入的文字到畫布上了。
    
    6. 圓形工具
    點擊以下圖示 :
![](https://i.imgur.com/K8wLzDr.png)
    
    可以拉出圓形。
    一般拉出的圓形會是空心的，若先按下面的填充按鈕再按此按鈕，則可以畫出實心的圓形，下面會對填充功能做說明。
    
    7. 方形工具
    點擊以下圖示 :
![](https://i.imgur.com/5OIWWyf.png)
    
    則可以拉出方形。
    跟圓形工具一樣，一般情況下會拉出空心方形，切換到填充模式後可以拉出實心的。
    
    8. 三角形工具
    點擊以下圖示 :
![](https://i.imgur.com/hRKwz0O.png)
    
    可以拉出三角形。
    一樣是一般情況會是空心，填充模式的時候才是實心。
    
    9. 直線工具
    點擊以下圖示 :
![](https://i.imgur.com/5L45TeS.png)
    
    可以拉出直直的一條線。
    
    10. 填充工具
    點擊以下圖示 :
![](https://i.imgur.com/5CbohTM.png)
    
    可以切換成填充模式。以上圓形、方形、三角形在填充模式下都會變成實心。再按一次就可以切回來了。
    
    11. 上傳工具
    點擊以下圖示 :
![](https://i.imgur.com/03rqY65.png)
    
    可以上傳電腦中的圖片至畫布上進行繪圖。
    
    12. 下載工具
    點擊以下圖示 :
![](https://i.imgur.com/6oV5TCh.png)
    
    可以下載畫布上的圖像。
    
    13. 復原工具
    點擊以下圖示 :
![](https://i.imgur.com/HNCeous.png)
    
    可以返回到上一個狀態。
    
    14. 重做工具
    點擊以下圖示 :
![](https://i.imgur.com/gE9YzF0.png)
    
    還原復原。
    
    15. 比例放大工具
    點擊以下圖示 :
![](https://i.imgur.com/tYq30CA.png)
    
    接下來的繪圖工作會在等比例放大兩倍的畫布上進行，可以輕鬆繪製很大的面積。
    
    16. 比例縮小工具
    點擊以下圖示 :
![](https://i.imgur.com/pcQjE2U.png)
    
    畫布比例縮小，能畫細節。
    
    17. 漸層工具
    點擊以下圖示 :
![](https://i.imgur.com/MFEqbec.png)
    
    可以切換到漸層模式，繪製出來的圖案會是依照畫布座標位置定的彩虹顏色。適用於文字，各種圖形，一般的筆跟直線。
    
    18. 重置工具
    點擊以下圖示 :
![](https://i.imgur.com/0hQIk6t.png)
    
    可以重置畫布。
### Function description

    實作的部分 : 
    
    分兩個部份來解釋 : 外觀 (HTML & CSS) 和功能運作(Javascript)
    
    1. 外觀
    
    整體使用了HTML的canvas功能。
    畫布的大小是800*1200(在HTML裡做設置，位置的調整則是在css中)，
    旁邊的兩排工具箱則是採用跟lab 04 計算機一樣的方式，利用表格來實做。
    會分成兩排的原因是一排控制輸入(右)，另一排控制輸出(左)，比較好分類。
    圖案擺放的位置由css 的margin function 控制。
    
    控制輸出的表格基本上有7列，每列兩行。
    把圖片置入表格中 (input type image)，所有的功能圖片大小皆為100*100px。
    利用onclick來呼叫javascript 裡的function。
    比較特別的是上傳圖片那格，他的input type是使用file，可以讓使用者上傳檔案。因為file的按鈕圖案不太好看，所以用span加了圖片蓋上去然後把原本的按鈕display設成none。
    
    另外一個控制輸入的表格比較麻煩，因為每個input type都不盡相同。
    調色盤用的是內建的color type(實在不知道如何另外用color picker QQ)，筆刷大小用的是range，字體大小用的是number，字型用的是form 裡的 option。
    他們輸入到javascript中都是透過document.getElementByID.value的方式，加上使用了神奇的oninput function，只要input值變化可以隨時傳入javascript中。
    
    
     2. 功能
    
    (沒有照著code的順序，依照整體架構解釋code如何運作)
    
    在開始一切的功能之前，首先要先監控mouse event : mouseup ， mousedown ， mousemove跟mouseout，控制drawing變數。 drawing一開始是設成false，也就是這張canvas還不能進行繪圖。mouseup 跟 mouseout 的 event皆會使drawing的值變成false，因為一個代表的是結束繪製(形象一點說就使把筆拿起來)跟超出畫布範圍。 mousedown 的話，drawing就會變成true，也就是可以進行繪製了。這邊特別的是要把mouse down 時的起始座標x跟y記起來，才可以使用功能。接下來就看另外一個核心架構 : mode。
    
    mode是整個功能運作的方式，依照用途分三種 :　mode, fillmode, gradientmode。
    
    第一個mode比較麻煩，是用來專門處理需要用到mouse move event的功能，例如畫筆，橡皮擦，圖形等等，由HTML的onclick中呼叫的funcion控制現在程式的mode。
    其餘的功能，例如返回或重置，只要寫在onclick呼叫的funcion即可。
    第二個fillmode，是處理按下fill模式後繪製圖形的方式是用stroke或fill。
    Gradientmode 是處理按下漸層模式後的填色方式。
    
    mode 總共有7種，分別是mode = 1，做繪圖， mode = 2，做擦布， mode = 3，打字 ，mode = 4，畫圓形， mode = 5，畫方形， mode = 6，畫三角形，跟 mode = 7，畫直線。
    他們的功能都寫在mousemove event裡面。
    
    1. 首先介紹繪圖與擦布，這兩者其實很像，共享了筆刷大小跟使用方式。
    他們的原理都是利用上述記住mouse down時的XY座標，也就是起始座標，在mousemove時畫線到現在的座標(lineto),利用stroke函式畫圖後再update起始座標的位置到current position(e.offsetX, e.offsetY)。這兩者唯一的不同，就是"globalCompositeOperation"的不同，筆刷是正常的source out，橡皮擦則是destination-out。有點像加跟減。
    
    2. 文字的部分就是依照起始座標把輸入跟調整好的文字放到畫布上。
    
    3. 繪製圖形跟拉直線的部分比較複雜，因為需要有拉的漸變過程。
       基本上所有圖形的繪圖原理都差不多，就是給定座標，使用line to ,stroke 或 fill 函數。
       其實最簡單的是三角形，頂點是初始位置，右頂點是現在的位置，左頂點的計算方式就是(2 * x - e.offsetX , e.offsetY)。
       圓形也不困難，算出直徑是Math.abs(x - e.offsetX) (記得要加絕對值)後，用arc函數可以簡單為我們繪製圓形。
       最難的反而是方形，原本我使用了strokrrect函數，但限制於長寬得是正的，不能往初始位置的右邊或上面畫。所以只好用別的方法，跟三角形一樣找到四個頂點，再用line to連接起來
       都處理完繪製的問題後，就要處理最麻煩的部分，也就是拉的時候要跟著漸變。
       其實簡單來說，可以把他想像成動畫，由不同大小的圖形疊起來，就可以呈現這樣的感覺。
       但這樣我是必得清掉上一個繪製的圖形的軌跡。一開始我使用clearrect來清掉上一個圖形的軌跡，但這樣會造成整個畫面都被清掉。我也嘗試使用redo undo的方法，但也沒有成功。後來才發現可以用簡單的getimageData() 跟 putimageData()就能完成這個功能。
       其實他也是用洗掉軌跡的方式來實做，只是clearrect會用空白洗掉，而putimageData()可以用圖片洗。getimageData有點像是截圖功能，也就是說，只要我們截了繪製圖形之前畫布的樣子，在每次mousemove的時候都putimageData，就能達到我們要的效果了!
       
       mode的功能都介紹完了，接下來要解釋如何接受到input的值。
       
       前面有提到所有input都可以用oninput的函式來處理，所以不多做解釋。比較特別的是文字的大小跟字型。由於canvas提供的設定字型大小的方式是大小跟字型合在一起的，所以要設定之前，要把兩個input的值轉成字串，再做處理。
       
       最後還有幾個功能沒有介紹到 : 
       
       首先是reset。這個只需要用clearrect清除整個畫布大小即可。
       
       填充的部分一開始fillmode = 0，就是不填色，如果fillmode事0，按下去fillmode就會變成1；反之fillmode = 1時按下此鍵，會變回0。
       
       上傳的部分前面因為file的關係，已經處理好了，我們要思考的就是要如何把選擇的檔案顯示出來。
       作法基本上依靠的是addeventlistener的change，一旦一個檔案被選擇了，就把他的資料貼到新創造的image資料裡，再用drawimage把他畫出來。
       
       下載的話，就是把整張圖片以URL跟PNG檔存進一個節點中，直接用download將他下載下來。
       
       最後是復原跟重做。
       復原跟重做牽涉到儲存狀態。想法是每次mouseup，也就是一次繪製結束的時候，把畫面上的圖案塞進一個陣列裡。如果要復原的話就是等於把陣列裡的前一個儲存的圖片貼出來，而重做就是把後一個儲存的圖片貼出來。
       其實後來發現用剛剛說的getimageData() 跟 putimageData()可以更簡單做到儲存這件事。
       
    ///////////////////////////////////////////////
    
    額外的功能 : 
    1. 比例放大工具
    2. 比例縮小工具
       用了canvas的scale。
    3. 漸層工具
       用了gradient工具，讓畫筆可以根據在畫布上的位置件變成固定顏色。
       gradientmode的控制跟fillmode 一樣。

### Gitlab page link

"https://107000109.gitlab.io/AS_01_WebCanvas"

### Others (Optional)

    好難啊QQ難到哭出來。
    對JS跟CSS不甚熟悉，有好多神奇的函數。
    但想著從一開始連canvas都放不上去，到最後竟然做完，非常有成就感也學到蠻多技巧。

<style>
table 
th
{
    width: 100%;
}
</style>