<!--
<script lang='ts'>
	function myFunction(){
		// Declare variables
		var input, filter, table, tr, td, i, txtValue;
		input = document.getElementById("filter");
		filter = input.value.toUpperCase();
		table = document.getElementById("table");
		tr = table.getElementsByTagName("tr");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[0];
			if (td) {
				txtValue = td.textContent || td.innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			}
		}
	}
</script>
<div id='content_block_12-body' class='wiki-section-body-2'>
	<div class='input-table-filter'>
		<input type='text' id='filter' onkeyup="myFunction()" placeholder='Filter...'></div>
	<table id='table' class='filter sort'>
		<thead>
		<tr>
			<th class='header'>Date</th>
			<th class='header'>Length</th>
			<th class='header'>Title</th>
		</tr>
		</thead>
		<tbody>

		<tr>
			<td>2018/09/16</td>
			<td>00:46:14</td>
			<td><a href='https://youtu.be/xlc5BJn-GXo' target='_blank' class='outlink' rel='nofollow'>【初配信】ホロライブ２期生の大空スバルっス！！！【謝罪会見】</a>
			</td>


		</tr>
		<tr>
			<td>2018/09/17</td>
			<td>00:36:57</td>
			<td><a href='https://youtu.be/riHkGtqXK90' target='_blank' class='outlink' rel='nofollow'>【ポケモン】名付け屋さんスバル【大喜利】</a>
			</td>


		</tr>
		<tr>
			<td>2018/09/20</td>
			<td>00:37:45</td>
			<td><a href='https://youtu.be/-nyZ9OkxU0A' target='_blank' class='outlink'
						 rel='nofollow'>【惨劇の】元気もりもりイントロドン！【カラオケ】</a></td>


		</tr>
		<tr>
			<td>2018/09/21</td>
			<td>00:38:23</td>
			<td><a href='https://youtu.be/9SdT3gKOf6w' target='_blank' class='outlink'
						 rel='nofollow'>【9/20】大空スバルの朝スバ！【おはよ！】</a></td>


		</tr>
		<tr>
			<td>2018/09/21</td>
			<td>00:24:15</td>
			<td><a href='https://youtu.be/fzLBpE09ZIQ' target='_blank' class='outlink' rel='nofollow'>【漫画】役者はスバル！！！【クイズ】</a>
			</td>


		</tr>

		<tr>
			<td>2018/09/25</td>
			<td>01:02:25</td>
			<td><a href='https://youtu.be/hYZj4ZiyG0A' target='_blank' class='outlink'
						 rel='nofollow'>【テスト】お昼ご飯はなんじゃろなああああ【配信】</a></td>


		</tr>
		<tr>
			<td>2018/09/27</td>
			<td>01:04:42</td>
			<td><a href='https://youtu.be/Nl5qhj9EjNs' target='_blank' class='outlink'
						 rel='nofollow'>【話題がなくなったら】よわよわ雑談【即爆破】</a></td>


		</tr>
		<tr>
			<td>2018/10/04</td>
			<td>00:00:57</td>
			<td><a href='https://youtu.be/GIJjKkxS_S4' target='_blank' class='outlink' rel='nofollow'>ぽんぽこ先輩へ!!!!!！！！！！！！！！！！！！！！</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/05</td>
			<td>00:00:15</td>
			<td><a href='https://youtu.be/QaOfr4V4zZU' target='_blank' class='outlink' rel='nofollow'>黒歴史を暴露してレクイエムをうたう</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/06</td>
			<td>00:44:07</td>
			<td><a href='https://youtu.be/bMnoW8_PQpI' target='_blank' class='outlink' rel='nofollow'>【ともだち】恐怖の館 with
				Siri【募集中】</a></td>


		</tr>
		<tr>
			<td>2018/10/08</td>
			<td>01:05:31</td>
			<td><a href='https://youtu.be/KzcaF-AMKs8' target='_blank' class='outlink' rel='nofollow'>【かすてら】みんなで雑談！コメント拾い祭り【おいしい】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/09</td>
			<td>00:57:52</td>
			<td><a href='https://youtu.be/QZ1fP9A_82c' target='_blank' class='outlink' rel='nofollow'>【ともだち】生配信で友だちに電話した結果ｗｗｗｗｗｗｗｗｗｗ【100人できるかな】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/11</td>
			<td>00:56:18</td>
			<td><a href='https://youtu.be/75bEudkPwAA' target='_blank' class='outlink' rel='nofollow'>【人食いサルから】好きな人と絶対両想いになる方法見つけたんだがｗｗｗｗｗｗｗｗｗｗｗｗ【逃げ回れ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/13</td>
			<td>00:59:49</td>
			<td><a href='https://youtu.be/NPa4MohVBZc' target='_blank' class='outlink' rel='nofollow'>【考えるな】うろ覚えで描く絵がヤバすぎたｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ【感じろ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/14</td>
			<td>00:59:23</td>
			<td><a href='https://youtu.be/vgD4h1XYUfM' target='_blank' class='outlink' rel='nofollow'>【デビュー会見】清純派アイドルだけど何か質問ある？？？【媚びライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/18</td>
			<td>00:56:31</td>
			<td><a href='https://youtu.be/A1IvoNUhGy4' target='_blank' class='outlink' rel='nofollow'>【部畜？】現役体育会マネージャーが質問に答えるッス！【社畜？】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/20</td>
			<td>00:58:39</td>
			<td><a href='https://youtu.be/NHFxpOBKaEk' target='_blank' class='outlink'
						 rel='nofollow'>【PUBG】方言で告白セリフするッス【熱すぎる】</a></td>


		</tr>
		<tr>
			<td>2018/10/21</td>
			<td>00:58:31</td>
			<td><a href='https://youtu.be/h7pSFo-dc7s' target='_blank' class='outlink' rel='nofollow'>【ファッションセンター】おだのぶ代改造計画【大空】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/23</td>
			<td>00:54:49</td>
			<td><a href='https://youtu.be/FzkzVnkqbPg' target='_blank' class='outlink' rel='nofollow'>【まったり】ねこ戦車で遊ぶッス！【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/25</td>
			<td>01:54:55</td>
			<td><a href='https://youtu.be/EjsgrtD2TZQ' target='_blank' class='outlink' rel='nofollow'>【社築に】＃1大空家のマイクラ【捧ぐ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/28</td>
			<td>00:52:18</td>
			<td><a href='https://youtu.be/AniWb9An6Fc' target='_blank' class='outlink' rel='nofollow'>【悲報】さよなら…大空スバル…【速報】</a>
			</td>


		</tr>
		<tr>
			<td>2018/10/31</td>
			<td>00:53:49</td>
			<td><a href='https://youtu.be/hZ_qd1d8Z54' target='_blank' class='outlink' rel='nofollow'>スバルの朗読でおやすみなさい</a></td>


		</tr>
		<tr>
			<td>2018/10/31</td>
			<td>00:50:39</td>
			<td><a href='https://youtu.be/bxNvP6iFrEg' target='_blank' class='outlink' rel='nofollow'>【これが】おだのぶホロライブオーディション【悪夢だ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/02</td>
			<td>01:01:33</td>
			<td><a href='https://youtu.be/0rfqv6Ix1oM' target='_blank' class='outlink' rel='nofollow'>【初】しぐれういママとお絵かきの森！【親子コラボ？！】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/06</td>
			<td>00:50:41</td>
			<td><a href='https://youtu.be/PPxxaRTmvzQ' target='_blank' class='outlink' rel='nofollow'>【スバルの】5000のスタンド使いがホロライブに入るまでの軌跡【過去】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/07</td>
			<td>00:51:24</td>
			<td><a href='https://youtu.be/1LaJ40tr0Mo' target='_blank' class='outlink' rel='nofollow'>【まったり】ちょっと眠い体育会系マネージャーとするお話【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/08</td>
			<td>02:00:05</td>
			<td><a href='https://youtu.be/8tDsISjpRXk' target='_blank' class='outlink' rel='nofollow'>【圧倒的】#２大空家のマイクラ【自由】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/09</td>
			<td>01:00:07</td>
			<td><a href='https://youtu.be/cKXw4n9-B68' target='_blank' class='outlink' rel='nofollow'>【まったり】深夜の朗読会【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/10</td>
			<td>00:51:59</td>
			<td><a href='https://youtu.be/LwzmJD3buH8' target='_blank' class='outlink' rel='nofollow'>【負けたら】魂の戦いマリオカート８！！！！！【罰ゲーム】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/11</td>
			<td>01:57:52</td>
			<td><a href='https://youtu.be/YqIsmkYiXDk' target='_blank' class='outlink' rel='nofollow'>【みんな】ひとりでマイクラ練習【助けて】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/13</td>
			<td>00:53:21</td>
			<td><a href='https://youtu.be/-rvtlWl_fMU' target='_blank' class='outlink' rel='nofollow'>【天才？】現役体育会系マネージャーが学力テストしてみた【脳筋？】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/15</td>
			<td>00:59:27</td>
			<td><a href='https://youtu.be/htWpFvITh6g' target='_blank' class='outlink'
						 rel='nofollow'>【家を】ひとりでマイクラ練習#２【つくる】</a></td>


		</tr>
		<tr>
			<td>2018/11/16</td>
			<td>00:46:47</td>
			<td><a href='https://youtu.be/zu-dlt-26MU' target='_blank' class='outlink' rel='nofollow'>【圧倒的】吊られるたびに✖✖✖になっちゃう？！DBD【初心者】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/17</td>
			<td>00:54:22</td>
			<td><a href='https://youtu.be/2PVepzQIauQ' target='_blank' class='outlink' rel='nofollow'>【リゼロ】１ミリも知らないゼロから始めるホロライブ生活【ミリしら】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/21</td>
			<td>00:58:57</td>
			<td><a href='https://youtu.be/EFsxHjrxdn4' target='_blank' class='outlink' rel='nofollow'>スバルとお話雑談・企画とか近況とか</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/22</td>
			<td>00:58:30</td>
			<td><a href='https://youtu.be/mLh8arJacOw' target='_blank' class='outlink' rel='nofollow'>【圧倒的感謝】天開司VSteam大空スバル【マリカー】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/23</td>
			<td>00:59:50</td>
			<td><a href='https://youtu.be/dO-FU3dvM0Y' target='_blank' class='outlink' rel='nofollow'>【まったり】DL終わったら7Dyas頑張ります【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2018/11/23</td>
			<td>01:27:37</td>
			<td><a href='https://youtu.be/3Cds54R-uUU' target='_blank' class='outlink' rel='nofollow'>一緒にあさごはん食べよ</a></td>


		</tr>
		<tr>
			<td>2018/11/24</td>
			<td>01:00:10</td>
			<td><a href='https://youtu.be/wiaQa1n5Tlk' target='_blank' class='outlink' rel='nofollow'>【圧倒的】WHO`S YOUR
				DADDY??親子プレイ！【親不孝】</a></td>


		</tr>
		<tr>
			<td>2018/11/25</td>
			<td>01:33:06</td>
			<td><a href='https://youtu.be/EdlZoIaUW0g' target='_blank' class='outlink' rel='nofollow'>まったりマイクラぷれい</a></td>


		</tr>
		<tr>
			<td>2018/11/28</td>
			<td>02:01:30</td>
			<td><a href='https://youtu.be/aLAlsJ1BQLQ' target='_blank' class='outlink'
						 rel='nofollow'>【第三回】大空家のマイクラ【#てばもと大】</a></td>


		</tr>
		<tr>
			<td>2018/12/01</td>
			<td>00:49:43</td>
			<td><a href='https://youtu.be/VzcGS3MagpI' target='_blank' class='outlink' rel='nofollow'>スバルの方言しばり雑談</a></td>


		</tr>
		<tr>
			<td>2018/12/02</td>
			<td>01:25:12</td>
			<td><a href='https://youtu.be/zjF89313ftw' target='_blank' class='outlink' rel='nofollow'>【アベンジャーズ】東京コミコン2018　感想レポートッス！！【DCコミックス】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/06</td>
			<td>01:13:59</td>
			<td><a href='https://youtu.be/I8WCrkCiJVg' target='_blank' class='outlink'
						 rel='nofollow'>【やれば！！】初心者のPUBG【できる！！！】</a></td>


		</tr>
		<tr>
			<td>2018/12/07</td>
			<td>02:33:15</td>
			<td><a href='https://youtu.be/QeXu53WTxyQ' target='_blank' class='outlink'
						 rel='nofollow'>【スピリッツ】大空さんのスマブラ生活【モード】</a></td>


		</tr>
		<tr>
			<td>2018/12/08</td>
			<td>01:03:00</td>
			<td><a href='https://youtu.be/vn4244u6Y9Q' target='_blank' class='outlink'
						 rel='nofollow'>【ホロサーバー】戦場で通す収益化【マイクラ】</a></td>


		</tr>
		<tr>
			<td>2018/12/09</td>
			<td>00:59:33</td>
			<td><a href='https://youtu.be/yxv4xlHFLTE' target='_blank' class='outlink' rel='nofollow'>【トレーラー】ホークアイ推しの見るアベンジャーズ４【同時視聴会】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/09</td>
			<td>01:30:35</td>
			<td><a href='https://youtu.be/HcuKL78jeps' target='_blank' class='outlink' rel='nofollow'>寝起きのスマブラSP 　スピリットモード</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/10</td>
			<td>01:06:35</td>
			<td><a href='https://youtu.be/R10NfgVAE74' target='_blank' class='outlink' rel='nofollow'>【目指せ】ミオちゃんに捧ぐホロライブマイクラ【収益化】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/11</td>
			<td>00:53:29</td>
			<td><a href='https://youtu.be/YyufGMIuv4A' target='_blank' class='outlink' rel='nofollow'>【回線しんだら】三者面談コラボリベンジ！【舞元チャンネル】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/15</td>
			<td>01:40:24</td>
			<td><a href='https://youtu.be/b5GzKRh4Szc' target='_blank' class='outlink' rel='nofollow'>ホロライブクラフト開会式！大空スバル視点</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/18</td>
			<td>01:07:09</td>
			<td><a href='https://youtu.be/lEf-uRvFqpg' target='_blank' class='outlink' rel='nofollow'>ぱぶじー！！！！！！ふつかめ！！！！</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/19</td>
			<td>00:59:39</td>
			<td><a href='https://youtu.be/j7Jq30gPHR4' target='_blank' class='outlink' rel='nofollow'>【クリスマス】久しぶりの雑談【衣装】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/20</td>
			<td>01:10:29</td>
			<td><a href='https://youtu.be/aeHwDxJCN5I' target='_blank' class='outlink' rel='nofollow'>【ホロライブ】つよつよびっくりハウス作り【サーバー】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/22</td>
			<td>01:05:47</td>
			<td><a href='https://youtu.be/eTX4w_1wsS0' target='_blank' class='outlink' rel='nofollow'>【媚びライブ】はあととスバルのシェアハウス生活【オフコラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/22</td>
			<td>00:57:28</td>
			<td><a href='https://youtu.be/lKIFPvpJoHE' target='_blank' class='outlink' rel='nofollow'>ホロライブ２期マイクラコラボ！！！！</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/23</td>
			<td>01:20:48</td>
			<td><a href='https://youtu.be/D3lMvsyjOk4' target='_blank' class='outlink' rel='nofollow'>【マイクラ】ときのそら先輩にプレゼント作るッス！！！【建設】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/25</td>
			<td>01:00:45</td>
			<td><a href='https://youtu.be/Smk9qQO098s' target='_blank' class='outlink' rel='nofollow'>【雑談】いつめんクリスマス会【コラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/29</td>
			<td>01:03:38</td>
			<td><a href='https://youtu.be/wXvcUfqARJ4' target='_blank' class='outlink' rel='nofollow'>【圧倒的】お風呂でするDBD　スバル視点【お風呂】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/29</td>
			<td>00:54:18</td>
			<td><a href='https://youtu.be/iZOeLM7ojH4' target='_blank' class='outlink' rel='nofollow'>【ホロライブ鯖】ホロライブの掟を教えるッス！！！【初みこちゃんコラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2018/12/30</td>
			<td>00:54:19</td>
			<td><a href='https://youtu.be/QjHlXKEF6A4' target='_blank' class='outlink' rel='nofollow'>ついにやってやったッスーーーーーー！！！！！！！！</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/01</td>
			<td>01:04:35</td>
			<td><a href='https://youtu.be/OGPjCHIUm98' target='_blank' class='outlink'
						 rel='nofollow'>【あけおめ】元旦マイクラ！猫カフェ編【スバル】</a></td>


		</tr>
		<tr>
			<td>2019/01/02</td>
			<td>01:03:06</td>
			<td><a href='https://youtu.be/mPSeZeQZbhU' target='_blank' class='outlink' rel='nofollow'>【グランドマザーハウス】大空家のお正月質問大会【オフコラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/03</td>
			<td>01:01:20</td>
			<td><a href='https://youtu.be/1LS_1HDZ6vU' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】猫カフェ作り~猫を懐かせるッス！~【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/05</td>
			<td>00:58:29</td>
			<td><a href='https://youtu.be/V-B6qy3Km2o' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】ミオちゃんの巨大迷路探索するッス！スバル編【巨大迷路探求】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/07</td>
			<td>00:56:31</td>
			<td><a href='https://youtu.be/PikR9jHZzyI' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】空腹島をSiriと脱出するッス！！！！！！！【With
				Siri 】</a></td>


		</tr>
		<tr>
			<td>2019/01/09</td>
			<td>01:04:36</td>
			<td><a href='https://youtu.be/D8sQDfN1PFw' target='_blank' class='outlink' rel='nofollow'>【前半：バーチャルさんは見てる】運営さんから謎のメールがきたッス！！！！！！【同時視聴】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/10</td>
			<td>01:08:19</td>
			<td><a href='https://youtu.be/UQEexK_T5p0' target='_blank' class='outlink' rel='nofollow'>【ホロライブ】ご新規一名様入りまァす！！！！！！！！！！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/11</td>
			<td>00:53:02</td>
			<td><a href='https://youtu.be/cdjvnBbKVCc' target='_blank' class='outlink' rel='nofollow'>【ホロライブ】ボイスとか最近の裏話雑談するッス！！！！！！！！！【アイドル】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/12</td>
			<td>00:45:38</td>
			<td><a href='https://youtu.be/tG87xwXpahw' target='_blank' class='outlink' rel='nofollow'>大空スバルアイドルへの道</a></td>


		</tr>
		<tr>
			<td>2019/01/13</td>
			<td>01:44:31</td>
			<td><a href='https://youtu.be/qJRb8zRt0CA' target='_blank' class='outlink' rel='nofollow'>【#ミオスバ】アイドルについて小一時間考える雑談【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/19</td>
			<td>01:27:43</td>
			<td><a href='https://youtu.be/90RC8SlL1O4' target='_blank' class='outlink' rel='nofollow'>【圧倒的沼】ハリポタ沼に落ちた限界オタクのするマイクラ【ファンタビ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/20</td>
			<td>01:09:02</td>
			<td><a href='https://youtu.be/1AzaH23GPkY' target='_blank' class='outlink'
						 rel='nofollow'>【新時代を】ホロライブ？！イケボ選手権【築け】</a></td>


		</tr>
		<tr>
			<td>2019/01/23</td>
			<td>01:25:42</td>
			<td><a href='https://youtu.be/7QkqajoNBnI' target='_blank' class='outlink'
						 rel='nofollow'>【雑談】初心者のPUBGッス！！！！！！【練習】</a></td>


		</tr>
		<tr>
			<td>2019/01/25</td>
			<td>01:13:01</td>
			<td><a href='https://youtu.be/M0G1ZRz95SM' target='_blank' class='outlink' rel='nofollow'>【人生初】トキメいたら即終了？！乙女ゲーム配信！！！【乙女ゲーム】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/26</td>
			<td>01:03:52</td>
			<td><a href='https://youtu.be/4hbslFaw1uA' target='_blank' class='outlink' rel='nofollow'>【親フラ】お母さんが起きてきたら即終了の深夜雑談【上等】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/26</td>
			<td>00:53:00</td>
			<td><a href='https://youtu.be/wYnzZdc_Ll0' target='_blank' class='outlink' rel='nofollow'>【男女】媚びライブオフコラボ３回目【オフコラボ？！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/27</td>
			<td>01:24:32</td>
			<td><a href='https://youtu.be/0Irt-X3gsUs' target='_blank' class='outlink' rel='nofollow'>【圧倒的】ときめいたら即終了？！乙女ゲーム実況#２【男気】</a>
			</td>


		</tr>
		<tr>
			<td>2019/01/27</td>
			<td>00:51:33</td>
			<td><a href='https://youtu.be/OnpGIwSeRvs' target='_blank' class='outlink'
						 rel='nofollow'>【初】人生フリースタイルダンジョン【お歌配信】</a></td>


		</tr>
		<tr>
			<td>2019/01/29</td>
			<td>01:17:44</td>
			<td><a href='https://youtu.be/4s5e5QPcoCo' target='_blank' class='outlink' rel='nofollow'>【初新年度】ちきちき！！！！ワードウルフ大会！！！！！！【#てばもと大】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/02</td>
			<td>01:32:37</td>
			<td><a href='https://youtu.be/pXC4H8AQ3fg' target='_blank' class='outlink' rel='nofollow'>【親フラ上等】大地中帝国を作るッス！！！！！！！！！！【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/03</td>
			<td>00:42:31</td>
			<td><a href='https://youtu.be/0XRtnvWuY7A' target='_blank' class='outlink' rel='nofollow'>【これからも】2万人ありがとッスーーーーーーー！！！！！！【よろしく！！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/06</td>
			<td>00:54:03</td>
			<td><a href='https://youtu.be/tYgzzwGebgc' target='_blank' class='outlink' rel='nofollow'>【運営】ホロライブ遊戯王デッキを作るッス！！！！！！【許可済み】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/07</td>
			<td>01:03:13</td>
			<td><a href='https://youtu.be/KK9Z2Z527sw' target='_blank' class='outlink' rel='nofollow'>【告知とか】ホロ鯖で地中大帝国をつくるッス！！！【いろいろ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/12</td>
			<td>04:45:54</td>
			<td><a href='https://youtu.be/Ke1xJoT236I' target='_blank' class='outlink' rel='nofollow'>【あや】完全所見APEX【スバ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/15</td>
			<td>01:18:22</td>
			<td><a href='https://youtu.be/wgDylC7ZGkA' target='_blank' class='outlink' rel='nofollow'>【ハッピー】お互いのバレンタインボイスを聞きあう地獄【バレンタイン】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/17</td>
			<td>01:24:03</td>
			<td><a href='https://youtu.be/c5xs3XoVXg8' target='_blank' class='outlink' rel='nofollow'>【#てばもと大】天才スバルのつよつよマイクラ教室【実況有】</a>
			</td>


		</tr>
		<tr>
			<td>2019/02/20</td>
			<td>01:01:53</td>
			<td><a href='https://youtu.be/2x1TztyJ4aQ' target='_blank' class='outlink' rel='nofollow'>【深夜】明日のにじさんじイケボ軍団 VS
				FAMSのサムネ作る【作業雑談】</a></td>


		</tr>
		<tr>
			<td>2019/02/20</td>
			<td>01:21:33</td>
			<td><a href='https://youtu.be/1YS8z_l7NOo' target='_blank' class='outlink' rel='nofollow'>【ホロライブFAMS】#にじホロイケボ
				選手権【にじさんじレインボーダンディーズ】</a></td>


		</tr>
		<tr>
			<td>2019/02/25</td>
			<td>01:01:21</td>
			<td><a href='https://youtu.be/4SmbPLns7Oo' target='_blank' class='outlink'
						 rel='nofollow'>【いつも】#YAGOOを救いたい【ありがとう】</a></td>


		</tr>
		<tr>
			<td>2019/02/26</td>
			<td>00:47:39</td>
			<td><a href='https://youtu.be/xzWi8w97N3k' target='_blank' class='outlink' rel='nofollow'>【運営】遊ホロ王【許可済み】</a></td>


		</tr>
		<tr>
			<td>2019/02/27</td>
			<td>00:59:28</td>
			<td><a href='https://youtu.be/u9_fQaUZCjY' target='_blank' class='outlink'
						 rel='nofollow'>【お歌】人生フリースタイルダンジョン【2月】</a></td>


		</tr>
		<tr>
			<td>2019/03/03</td>
			<td>01:01:06</td>
			<td><a href='https://youtu.be/4HqhytWzg68' target='_blank' class='outlink' rel='nofollow'>【あやスバ】よわよわでもちゃんぽんが食べたいッ【APEX】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/03</td>
			<td>00:49:58</td>
			<td><a href='https://youtu.be/KrFsYbABmgU' target='_blank' class='outlink' rel='nofollow'>【ひな祭り】大空家大集合マシュマロ質問会【ガチ親子】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/05</td>
			<td>02:18:22</td>
			<td><a href='https://youtu.be/OjcaPS43Z4M' target='_blank' class='outlink' rel='nofollow'>【最弱Vtuber】APEXするッス！！！！！【1キルを目指す】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/07</td>
			<td>01:18:11</td>
			<td><a href='https://youtu.be/ZHnVvyBF79A' target='_blank' class='outlink' rel='nofollow'>【Vtuber最弱】パッツンでも１キルしたい！！！！！【APEX】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/10</td>
			<td>00:51:53</td>
			<td><a href='https://youtu.be/_uIWs8Z40Jg' target='_blank' class='outlink' rel='nofollow'>【Vtuberの】つよつよスバルの占いの館【未来】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/10</td>
			<td>01:12:50</td>
			<td><a href='https://youtu.be/fFDk9yHPIWI' target='_blank' class='outlink' rel='nofollow'>【Vtuberの】Twitter探偵！！！ホロライブ探偵団！！！【リアル】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/14</td>
			<td>00:38:33</td>
			<td><a href='https://youtu.be/U3e9N-N7508' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】親フラ上等！大空スバルがホラゲーするだけ【the
				house】</a></td>


		</tr>
		<tr>
			<td>2019/03/17</td>
			<td>00:57:29</td>
			<td><a href='https://youtu.be/YDobwvI6Zeo' target='_blank' class='outlink'
						 rel='nofollow'>【気が付いたら】１から動画を雑に見直す会【半年】</a></td>


		</tr>
		<tr>
			<td>2019/03/18</td>
			<td>00:45:48</td>
			<td><a href='https://youtu.be/ZEJNdX6bgS8' target='_blank' class='outlink' rel='nofollow'>【Vtuber】#あやスバ
				はバズりたいっ！！！【マシュマロ】</a></td>


		</tr>
		<tr>
			<td>2019/03/21</td>
			<td>00:20:37</td>
			<td><a href='https://youtu.be/UzmYi_7ma-U' target='_blank' class='outlink' rel='nofollow'>【寝起き】#地獄のお泊り会　あやめ・スバル・ミオ早起き競争【ドッキリ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/24</td>
			<td>01:02:38</td>
			<td><a href='https://youtu.be/ZY_lXXg1UE8' target='_blank' class='outlink' rel='nofollow'>【進捗】大空スバルの野望【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/27</td>
			<td>01:21:42</td>
			<td><a href='https://youtu.be/-WEphOI9AVw' target='_blank' class='outlink'
						 rel='nofollow'>【あやスバ】イケボカワボ耐久PUBG【コラボ】</a></td>


		</tr>
		<tr>
			<td>2019/03/30</td>
			<td>01:12:00</td>
			<td><a href='https://youtu.be/SRuMc2OVq-U' target='_blank' class='outlink' rel='nofollow'>【美術５の】視聴者参加型！！大空スバル画伯のお絵かきの森【本気】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/30</td>
			<td>00:55:13</td>
			<td><a href='https://youtu.be/a6rf2rUwbaU' target='_blank' class='outlink' rel='nofollow'>【親フラ】恐怖の森？？？よゆーよゆーｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗｗ【上等】</a>
			</td>


		</tr>
		<tr>
			<td>2019/03/31</td>
			<td>01:22:05</td>
			<td><a href='https://youtu.be/qvN0eRdzSRM' target='_blank' class='outlink' rel='nofollow'>【平成】ニコニコ組曲縛りの鬼歌枠【最後】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/01</td>
			<td>00:59:12</td>
			<td><a href='https://youtu.be/Nltfrnq9P7c' target='_blank' class='outlink'
						 rel='nofollow'>【声のプロ】大空スバル声の波長観測会【にあ先生】</a></td>


		</tr>
		<tr>
			<td>2019/04/03</td>
			<td>01:10:15</td>
			<td><a href='https://youtu.be/41Ka35m8H6g' target='_blank' class='outlink' rel='nofollow'>【深夜】スバ友会議【小声雑談】</a></td>


		</tr>
		<tr>
			<td>2019/04/04</td>
			<td>01:01:02</td>
			<td><a href='https://youtu.be/JBPv9PP7jp0' target='_blank' class='outlink'
						 rel='nofollow'>【大空スバル】スバ友会議リベンジ【救済企画】</a></td>


		</tr>
		<tr>
			<td>2019/04/06</td>
			<td>00:21:45</td>
			<td><a href='https://youtu.be/UKJzqXnKsqs' target='_blank' class='outlink' rel='nofollow'>【初見】カタカナ禁止？！スプラトゥーン２！！！【プレイ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/06</td>
			<td>00:30:25</td>
			<td><a href='https://youtu.be/toNRi_yzbe4' target='_blank' class='outlink' rel='nofollow'>【初見】カタカナ禁止？！スプラトゥーン２！！！【プレイ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/07</td>
			<td>01:29:33</td>
			<td><a href='https://youtu.be/WOipbg7EHMg' target='_blank' class='outlink' rel='nofollow'>【めっちゃ】大神さんに教えてもらうスプラトゥーン２！！！【たのしい】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/07</td>
			<td>00:58:25</td>
			<td><a href='https://youtu.be/yQlMup06-Q8' target='_blank' class='outlink' rel='nofollow'>【大空家】しぐれうい母ちゃんとスプラトゥーンするッス！！！！【コラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/09</td>
			<td>00:44:19</td>
			<td><a href='https://youtu.be/mHQdHhtFaNo' target='_blank' class='outlink'
						 rel='nofollow'>【ゲリラ】テトスバがPUBG頑張る会【PUBG】</a></td>


		</tr>
		<tr>
			<td>2019/04/10</td>
			<td>00:18:39</td>
			<td><a href='https://youtu.be/bW2f8g7DDtg' target='_blank' class='outlink' rel='nofollow'>【神ゲー】ソーセージ界の王にスバルはなるッス！！！！！【ソーセージレジェンド】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/11</td>
			<td>01:02:04</td>
			<td><a href='https://youtu.be/k_GOOtn1P-M' target='_blank' class='outlink'
						 rel='nofollow'>【舞スバ】　#にじホロ青空教室　【27とJK】</a></td>


		</tr>
		<tr>
			<td>2019/04/13</td>
			<td>00:58:41</td>
			<td><a href='https://youtu.be/Fz_B1wIwweg' target='_blank' class='outlink' rel='nofollow'>【先輩の】あくスバでやるスプラトゥーン練習会！！【威厳】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/14</td>
			<td>02:25:52</td>
			<td><a href='https://youtu.be/G1dPbAL9dd4' target='_blank' class='outlink' rel='nofollow'>【MCU】マーベルオタクと一緒に見るアイアンマン１（字幕版）【同時視聴会】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/14</td>
			<td>00:47:10</td>
			<td><a href='https://youtu.be/0alZV7Px3Sk' target='_blank' class='outlink' rel='nofollow'>【PUBG】 #チーム陽キャ
				がんばるッス！！！！！！【大会】</a></td>


		</tr>
		<tr>
			<td>2019/04/14</td>
			<td>00:39:27</td>
			<td><a href='https://youtu.be/tZY6iEBwMuQ' target='_blank' class='outlink' rel='nofollow'>【PUBG】 #チーム陽キャ
				がんばるッス！！！！二試合目【大会】</a></td>


		</tr>
		<tr>
			<td>2019/04/14</td>
			<td>00:33:12</td>
			<td><a href='https://youtu.be/0AFTY29XRsw' target='_blank' class='outlink' rel='nofollow'>【PUBG】 #チーム陽キャ
				がんばるッス！！！！三試合目【大会】</a></td>


		</tr>
		<tr>
			<td>2019/04/17</td>
			<td>01:07:35</td>
			<td><a href='https://youtu.be/SwxBdiXcoEE' target='_blank' class='outlink' rel='nofollow'>【めちゃくちゃ】大空スバルのスプラトゥーン2！！【大人しい？！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/18</td>
			<td>01:06:38</td>
			<td><a href='https://youtu.be/_fdSBdMgaxw' target='_blank' class='outlink' rel='nofollow'>【笑ったら】初見実況！絶対に笑ってはいけない学園ハンサム【即退場】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/20</td>
			<td>01:49:25</td>
			<td><a href='https://youtu.be/oQkVQ-kCWFU' target='_blank' class='outlink' rel='nofollow'>【Vtuber】チーム舞スバ　VS　チームふくやらんちゃん【麻雀】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/21</td>
			<td>02:34:36</td>
			<td><a href='https://youtu.be/XgJWwSmtjjw' target='_blank' class='outlink'
						 rel='nofollow'>【神回】アベンジャーズ１同時視聴会【確定】</a></td>


		</tr>
		<tr>
			<td>2019/04/21</td>
			<td>01:14:56</td>
			<td><a href='https://youtu.be/urDJKmrpcMg' target='_blank' class='outlink'
						 rel='nofollow'>【初見】親フラしたら即終了？！夜廻り＃１【実況】</a></td>


		</tr>
		<tr>
			<td>2019/04/22</td>
			<td>01:02:41</td>
			<td><a href='https://youtu.be/4DD_5Ir2-n0' target='_blank' class='outlink' rel='nofollow'>【志賀慎吾】絶対に笑ってはいけない学園ハンサム＃２【攻略】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/25</td>
			<td>01:01:05</td>
			<td><a href='https://youtu.be/NmA87vcEq-Q' target='_blank' class='outlink' rel='nofollow'>【まったり】ガチエリアランクC目指すッス！！！！【スプラトゥーン】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/25</td>
			<td>02:46:39</td>
			<td><a href='https://youtu.be/k6fk_W5GN2A' target='_blank' class='outlink' rel='nofollow'>【エンドゲーム】アベンジャーズ・インフィニティーウォー同時視聴会【前夜祭】</a>
			</td>


		</tr>
		<tr>
			<td>2019/04/27</td>
			<td>01:07:51</td>
			<td><a href='https://youtu.be/k7YuE59RyCs' target='_blank' class='outlink' rel='nofollow'>【夜回り】あやスバ！！！鬼と一緒にするホラゲー【２回目】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/01</td>
			<td>00:55:47</td>
			<td><a href='https://youtu.be/IkEpzyAd2sw' target='_blank' class='outlink' rel='nofollow'>【平成】平成をニコニコメドレーを歌って振り返ったりなどするVtuber【令和】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/01</td>
			<td>00:52:21</td>
			<td><a href='https://youtu.be/X9tIK_zfcfY' target='_blank' class='outlink' rel='nofollow'>【夜廻り】怖がりミオちゃんといく！夜廻り【三回目】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/02</td>
			<td>01:04:45</td>
			<td><a href='https://youtu.be/hz-trFXRMoA' target='_blank' class='outlink' rel='nofollow'>【ようこそ】ホロライブスプラ部！大空スバル視点【はあとちゃん！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/04</td>
			<td>00:28:15</td>
			<td><a href='https://youtu.be/tGbU1qczOsM' target='_blank' class='outlink'
						 rel='nofollow'>【ミオスバあやめ】オフコラボ雑談【お泊り会】</a></td>


		</tr>
		<tr>
			<td>2019/05/05</td>
			<td>00:51:43</td>
			<td><a href='https://youtu.be/bdnotTuDWss' target='_blank' class='outlink' rel='nofollow'>【GW】舞スバの雑談【おひさしぶり】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/05</td>
			<td>01:05:47</td>
			<td><a href='https://youtu.be/8XNaetZpUtU' target='_blank' class='outlink' rel='nofollow'>【#大空スバル3D】大空スバル3Dお披露目生放送するッス！！【3D生放送】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/07</td>
			<td>01:04:10</td>
			<td><a href='https://youtu.be/vrDJni3n4uE' target='_blank' class='outlink'
						 rel='nofollow'>【ホロライブ】３Dお披露目感想会【大空スバル】</a></td>


		</tr>
		<tr>
			<td>2019/05/09</td>
			<td>01:25:09</td>
			<td><a href='https://youtu.be/eWiZ0Uc-kug' target='_blank' class='outlink' rel='nofollow'>【志賀ガチ勢】絶対に笑ってはいけない学園ハンサム#3【おかゆ参戦】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/09</td>
			<td>00:50:43</td>
			<td><a href='https://youtu.be/P9JCLPS1cQs' target='_blank' class='outlink'
						 rel='nofollow'>【ご意見】みんなで企画考えるッス！！！【募集箱】</a></td>


		</tr>
		<tr>
			<td>2019/05/13</td>
			<td>00:46:57</td>
			<td><a href='https://youtu.be/Nv_7gdYzal0' target='_blank' class='outlink' rel='nofollow'>【伝説回】視聴者参加型！！ポケモン大喜利！！！！【再び】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/13</td>
			<td>01:02:41</td>
			<td><a href='https://youtu.be/AWg5665-QHU' target='_blank' class='outlink' rel='nofollow'>【大空家】みんなでスプラトゥーン２するッス！！！！【コラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/17</td>
			<td>01:01:10</td>
			<td><a href='https://youtu.be/gSlStd_L81c' target='_blank' class='outlink' rel='nofollow'>【お泊り会】まったりマイクラするッス！！！！！！【振り返り放送】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/17</td>
			<td>01:01:50</td>
			<td><a href='https://youtu.be/ViTSFBnbkuk' target='_blank' class='outlink' rel='nofollow'>【みんなで】大空スバルは空気が読めるのか？？【空気読み】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/18</td>
			<td>01:06:34</td>
			<td><a href='https://youtu.be/Re6rJtgSNEk' target='_blank' class='outlink' rel='nofollow'>【ミオスバ】ミオちゃんといっしょにお話しするッス！！！！【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/22</td>
			<td>01:11:13</td>
			<td><a href='https://youtu.be/7ydMIAwvQ_I' target='_blank' class='outlink' rel='nofollow'>【初見さん】まったりキャンプファイヤー作り2日目！【歓迎】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/24</td>
			<td>01:09:05</td>
			<td><a href='https://youtu.be/fwOWZHvjvBw' target='_blank' class='outlink' rel='nofollow'>【親フラ】叫んだら即終了！！！夜廻り4日目【上等】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/25</td>
			<td>00:48:11</td>
			<td><a href='https://youtu.be/yipUierxS9Y' target='_blank' class='outlink' rel='nofollow'>【３Dコラボ】あやスバ反省会SWITCH!!!!!!!!!!!!!!!!【お疲れ様でした】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/26</td>
			<td>01:08:11</td>
			<td><a href='https://youtu.be/HBWrDPTSFnY' target='_blank' class='outlink' rel='nofollow'>【今日こそ】巨大キャンプファイヤー作るッス！【完成】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/27</td>
			<td>00:53:21</td>
			<td><a href='https://youtu.be/iTtiikFMgv4' target='_blank' class='outlink' rel='nofollow'>【今週の】5位以下で即おばあちゃんが降臨するマリオカート8【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2019/05/28</td>
			<td>00:52:28</td>
			<td><a href='https://youtu.be/TmsgB9YFu7w' target='_blank' class='outlink'
						 rel='nofollow'>【夜廻り】いなくなったお姉ちゃんを探す【5日目】</a></td>


		</tr>
		<tr>
			<td>2019/05/29</td>
			<td>01:17:07</td>
			<td><a href='https://youtu.be/eggnMi72kYE' target='_blank' class='outlink'
						 rel='nofollow'>【にじホロ】Vtuberボーイッシュ会【コラボ】</a></td>


		</tr>
		<tr>
			<td>2019/05/31</td>
			<td>01:05:16</td>
			<td><a href='https://youtu.be/zDZdZW7hE-U' target='_blank' class='outlink'
						 rel='nofollow'>【完全】スバル、マッチョになるッス！！！【初見】</a></td>


		</tr>
		<tr>
			<td>2019/06/02</td>
			<td>00:48:57</td>
			<td><a href='https://youtu.be/CLzcZ-7LdZk' target='_blank' class='outlink' rel='nofollow'>【アニソン】（こころが）大空スバルの月１歌枠（しにそう）【ボカロHIPHOP】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/03</td>
			<td>01:09:25</td>
			<td><a href='https://youtu.be/1XA-s5F9PMU' target='_blank' class='outlink' rel='nofollow'>【親フラ】まもなく最終章！まったり小声夜廻り【上等】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/03</td>
			<td>01:09:42</td>
			<td><a href='https://youtu.be/R9iOijgLO7Q' target='_blank' class='outlink' rel='nofollow'>【今週の】5位以外で即キャラ変マリオカート【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/07</td>
			<td>00:59:14</td>
			<td><a href='https://youtu.be/BLRBIl_dl0A' target='_blank' class='outlink' rel='nofollow'>【5万人記念】絶対に大喜利にしたくないスバル
				vs 絶対に大喜利にしたいリスナー【ありがと！！！！】</a></td>


		</tr>
		<tr>
			<td>2019/06/09</td>
			<td>01:05:12</td>
			<td><a href='https://youtu.be/zIJayUflioU' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】３人でキャンプいくッス！！！！【おかころスバマイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/10</td>
			<td>00:59:04</td>
			<td><a href='https://youtu.be/YnHYX_26buI' target='_blank' class='outlink' rel='nofollow'>【ほな、】リスナーVSスバル！食わず嫌い選手権！！！【いただきます】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/12</td>
			<td>01:34:53</td>
			<td><a href='https://youtu.be/xKsr6utQJEU' target='_blank' class='outlink' rel='nofollow'>【最終章】夜廻りwith刃牙【夜廻り】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/12</td>
			<td>01:25:06</td>
			<td><a href='https://youtu.be/qmo-egeV76Y' target='_blank' class='outlink' rel='nofollow'>とある魔術の愛好家達（マニアクス）【#とあるIF】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/14</td>
			<td>00:31:10</td>
			<td><a href='https://youtu.be/1yJk81J88ho' target='_blank' class='outlink'
						 rel='nofollow'>【くしゃみしたら】第一回　こより雑談【即終了】</a></td>


		</tr>
		<tr>
			<td>2019/06/15</td>
			<td>01:00:41</td>
			<td><a href='https://youtu.be/EjnOJdIRUNo' target='_blank' class='outlink' rel='nofollow'>【マシュマロ】OBの武勇伝、レベルが桁違い説【募集】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/17</td>
			<td>01:02:06</td>
			<td><a href='https://youtu.be/GaLxnLYSL6o' target='_blank' class='outlink'
						 rel='nofollow'>【あやスバ】伝説のパンダを探すッス！【マイクラ】</a></td>


		</tr>
		<tr>
			<td>2019/06/19</td>
			<td>00:16:18</td>
			<td><a href='https://youtu.be/TS5ZHctvRhM' target='_blank' class='outlink'
						 rel='nofollow'>【大空】7位以下で即免許返納マリカ【スババア】</a></td>


		</tr>
		<tr>
			<td>2019/06/20</td>
			<td>01:04:22</td>
			<td><a href='https://youtu.be/z2v4I4bU26E' target='_blank' class='outlink'
						 rel='nofollow'>【まったり】実は関西弁キャラなんス【方言雑談】</a></td>


		</tr>
		<tr>
			<td>2019/06/21</td>
			<td>00:51:57</td>
			<td><a href='https://youtu.be/S6iHovriq0A' target='_blank' class='outlink'
						 rel='nofollow'>【初】スパイダーマンするッス！！！【PS4】</a></td>


		</tr>
		<tr>
			<td>2019/06/21</td>
			<td>01:09:45</td>
			<td><a href='https://youtu.be/1pyBumd3nuc' target='_blank' class='outlink'
						 rel='nofollow'>【#２】スパイダーマンするッス！【神ゲー】</a></td>


		</tr>
		<tr>
			<td>2019/06/23</td>
			<td>00:59:02</td>
			<td><a href='https://youtu.be/-3_a6oxykR0' target='_blank' class='outlink' rel='nofollow'>【クソマロ】絶対に笑ってはいけないクソマロ【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/26</td>
			<td>01:08:10</td>
			<td><a href='https://youtu.be/Q_RZbZrYavE' target='_blank' class='outlink' rel='nofollow'>【#ムーングラデーション】アンジャナフ討伐は俺たちにまかせろ！【MHW】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/28</td>
			<td>01:19:17</td>
			<td><a href='https://youtu.be/w5vmPGM3XUQ' target='_blank' class='outlink' rel='nofollow'>【関西弁縛り】圧倒的初心者のトビカガチソロ討伐【MHW】</a>
			</td>


		</tr>
		<tr>
			<td>2019/06/30</td>
			<td>00:46:04</td>
			<td><a href='https://youtu.be/ptDskjaJ8gY' target='_blank' class='outlink' rel='nofollow'>【圧倒的】Vtuberがホラゲーやった結果【後悔】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/02</td>
			<td>00:57:29</td>
			<td><a href='https://youtu.be/JxqnMHi4fwo' target='_blank' class='outlink'
						 rel='nofollow'>【重大発表】大空スバルお誕生日配信【２つ！】</a></td>


		</tr>
		<tr>
			<td>2019/07/06</td>
			<td>01:33:56</td>
			<td><a href='https://youtu.be/oOY4u8gBP5I' target='_blank' class='outlink'
						 rel='nofollow'>【2回目】しょぼんのアクション！【リベンジ戦】</a></td>


		</tr>
		<tr>
			<td>2019/07/06</td>
			<td>00:51:04</td>
			<td><a href='https://youtu.be/cHje84GdyqI' target='_blank' class='outlink'
						 rel='nofollow'>【7/7】個人ボイス内容説明会ッス！【発売開始】</a></td>


		</tr>
		<tr>
			<td>2019/07/08</td>
			<td>01:08:26</td>
			<td><a href='https://youtu.be/LsxiepxqjFs' target='_blank' class='outlink' rel='nofollow'>【解散の】目指せ全問正解！メンバー愛クイズ！！！【危機】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/11</td>
			<td>01:05:18</td>
			<td><a href='https://youtu.be/0eyXUS0Ldcs' target='_blank' class='outlink'
						 rel='nofollow'>【方言】まったりおはなしするッス！【雑談】</a></td>


		</tr>
		<tr>
			<td>2019/07/12</td>
			<td>01:06:18</td>
			<td><a href='https://youtu.be/bITaZ0F8em4' target='_blank' class='outlink' rel='nofollow'>【#大空スバル3D】スバルがしたいこと全部するッス！【わがまま回】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/14</td>
			<td>01:04:16</td>
			<td><a href='https://youtu.be/h1Lx_K8fXuo' target='_blank' class='outlink' rel='nofollow'>【ホロライブの】マリオメーカー２するッス！【良心探し】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/15</td>
			<td>01:05:06</td>
			<td><a href='https://youtu.be/rlNPhvjRK-A' target='_blank' class='outlink'
						 rel='nofollow'>【まったり】3時のおやつ一緒にたべよ！【雑談】</a></td>


		</tr>
		<tr>
			<td>2019/07/17</td>
			<td>01:52:55</td>
			<td><a href='https://youtu.be/LNUE6Jm47hQ' target='_blank' class='outlink' rel='nofollow'>【#Vtuber甲子園】私立ホロライブ女学院！最強チーム作るッス！！【#1】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/18</td>
			<td>00:59:06</td>
			<td><a href='https://youtu.be/RQnqjBUxRcc' target='_blank' class='outlink' rel='nofollow'>【スーパーマリオメーカー２】借金返済生活１日目【ストーリーモード】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/19</td>
			<td>01:02:23</td>
			<td><a href='https://youtu.be/XcKilCUcGSo' target='_blank' class='outlink' rel='nofollow'>【フブキ先輩】おばあちゃんと孫のHome
				sweet home【ありがとうございます】</a></td>


		</tr>
		<tr>
			<td>2019/07/20</td>
			<td>06:07:40</td>
			<td><a href='https://youtu.be/GSsB8CGc7TI' target='_blank' class='outlink' rel='nofollow'>【#Vtuber甲子園】ホロライブ女学院始動ッス！！！【ホロライブ耐久配信】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/22</td>
			<td>01:04:45</td>
			<td><a href='https://youtu.be/WTIvOP1kxAM' target='_blank' class='outlink' rel='nofollow'>【夏休み】7月スバ友会議するッス！【あじまた！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/23</td>
			<td>00:55:35</td>
			<td><a href='https://youtu.be/OPXPxGdjRvg' target='_blank' class='outlink' rel='nofollow'>【マリオメーカー２】いきいき借金生活★二日目ッス！【ストーリー】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/24</td>
			<td>01:27:26</td>
			<td><a href='https://youtu.be/rqWbGZ_srXE' target='_blank' class='outlink'
						 rel='nofollow'>【ホロ鯖】過疎サーバーを救え。【マインクラフト】</a></td>


		</tr>
		<tr>
			<td>2019/07/24</td>
			<td>01:52:49</td>
			<td><a href='https://youtu.be/xacD4uyVlJo' target='_blank' class='outlink' rel='nofollow'>【スバル視点】project winter
				するッス！！【雪山人狼】</a></td>


		</tr>
		<tr>
			<td>2019/07/25</td>
			<td>00:57:06</td>
			<td><a href='https://youtu.be/1QU5QslJ_dI' target='_blank' class='outlink'
						 rel='nofollow'>【夏休み】お昼ごはん一緒に食べるッス！【限定】</a></td>


		</tr>
		<tr>
			<td>2019/07/26</td>
			<td>01:07:14</td>
			<td><a href='https://youtu.be/HyNsnjYNApo' target='_blank' class='outlink' rel='nofollow'>【初心】初配信を見直してスバルの心が死ぬ配信【大事】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/26</td>
			<td>00:58:44</td>
			<td><a href='https://youtu.be/87T-9UlxgcE' target='_blank' class='outlink' rel='nofollow'>【幽霊の日】怖い話をしたいスバル VS
				大喜利をしたいリスナー【マシュマロ】</a></td>


		</tr>
		<tr>
			<td>2019/07/27</td>
			<td>06:49:42</td>
			<td><a href='https://youtu.be/mgotCzHzaEI' target='_blank' class='outlink' rel='nofollow'>【#Vtuber甲子園】奇跡のホロライブ女学院、エース爆誕ッス！！【耐久配信】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/28</td>
			<td>03:48:27</td>
			<td><a href='https://youtu.be/DbZETJWLQw8' target='_blank' class='outlink' rel='nofollow'>【#Vtuber甲子園】強運のホロ女、夏大二回戦目【ホロライブ女学院】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/28</td>
			<td>01:11:18</td>
			<td><a href='https://youtu.be/5057ZYKXYnA' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】過疎マイクラサーバー VS
				スバルの人徳【救済企画】</a></td>


		</tr>
		<tr>
			<td>2019/07/30</td>
			<td>00:54:00</td>
			<td><a href='https://youtu.be/bA7e8PTPtFk' target='_blank' class='outlink' rel='nofollow'>【新衣装】スバルのつよつよ衣装みて！！！！！！！！【発表会】</a>
			</td>


		</tr>
		<tr>
			<td>2019/07/31</td>
			<td>00:58:06</td>
			<td><a href='https://youtu.be/TMbu7jfnG5A' target='_blank' class='outlink' rel='nofollow'>【気が付けば】twitterの下書き大後悔（公開）時代【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/01</td>
			<td>01:55:36</td>
			<td><a href='https://youtu.be/XrnN1kzARh8' target='_blank' class='outlink' rel='nofollow'>【マリオメーカー２】きのぴこ親方に震えろ…！！！！【ストーリーモード】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/02</td>
			<td>01:36:28</td>
			<td><a href='https://youtu.be/n3pynJBLqD8' target='_blank' class='outlink' rel='nofollow'>【まったり】ホロライブサーバー救済するッス！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/03</td>
			<td>04:19:45</td>
			<td><a href='https://youtu.be/YieQKBKR8PI' target='_blank' class='outlink' rel='nofollow'>【Vtuber甲子園】いよいよ３年目！最終章突入ッス！！【ホロライブ女学園】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/03</td>
			<td>00:55:06</td>
			<td><a href='https://youtu.be/3AHepg_yFlc' target='_blank' class='outlink' rel='nofollow'>【神ゲー】絶対に笑ってはいけない学園ハンサム【降臨】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/04</td>
			<td>05:39:32</td>
			<td><a href='https://youtu.be/MJiOQFvBg3A' target='_blank' class='outlink' rel='nofollow'>【最終回】ホロライブ女学院、最後の夏大！【Vtuber甲子園】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/04</td>
			<td>01:33:10</td>
			<td><a href='https://youtu.be/wpxMwBJ52R0' target='_blank' class='outlink'
						 rel='nofollow'>【和風最強】夏休みだし影廊するッス！【ホラー】</a></td>


		</tr>
		<tr>
			<td>2019/08/05</td>
			<td>01:19:23</td>
			<td><a href='https://youtu.be/occ40vU30uI' target='_blank' class='outlink' rel='nofollow'>【マリオメーカー２】親方とニートと婚活カエルと。【借金返済生活】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/06</td>
			<td>01:11:18</td>
			<td><a href='https://youtu.be/vXBBnOndRHk' target='_blank' class='outlink' rel='nofollow'>【おい】絶対に笑ってはいけない学園ハンサム～御剣咲夜攻略～【デュエルしろ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/06</td>
			<td>00:44:57</td>
			<td><a href='https://youtu.be/KNKW5VSa4dY' target='_blank' class='outlink'
						 rel='nofollow'>【お歌】お歌頑張るリベンジ枠！！！！【頑張る】</a></td>


		</tr>
		<tr>
			<td>2019/08/07</td>
			<td>01:07:26</td>
			<td><a href='https://youtu.be/BZ1WFq0MSIk' target='_blank' class='outlink'
						 rel='nofollow'>【マシュマロ】一緒におやつ食べるッス！【雑談】</a></td>


		</tr>
		<tr>
			<td>2019/08/10</td>
			<td>01:12:26</td>
			<td><a href='https://youtu.be/uTcH5CGZW0U' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】第二回 #雪山ホロ人狼
				【project winter】</a></td>


		</tr>
		<tr>
			<td>2019/08/12</td>
			<td>00:56:50</td>
			<td><a href='https://youtu.be/7vWsmovhU7I' target='_blank' class='outlink' rel='nofollow'>【現役JKマネの】みんなの夏のとんでもエピソード選手権！【夏合宿】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/12</td>
			<td>01:04:30</td>
			<td><a href='https://youtu.be/stebizlkBp4' target='_blank' class='outlink'
						 rel='nofollow'>【ホロ鯖】まったりマイクラするッス！！！【救済】</a></td>


		</tr>
		<tr>
			<td>2019/08/12</td>
			<td>00:58:41</td>
			<td><a href='https://youtu.be/Pm-BHfLHZds' target='_blank' class='outlink'
						 rel='nofollow'>【和風最強ホラー】影廊するッス！！！！【その２】</a></td>


		</tr>
		<tr>
			<td>2019/08/13</td>
			<td>00:55:25</td>
			<td><a href='https://youtu.be/9j1KMsQx28w' target='_blank' class='outlink' rel='nofollow'>【初見プレイ】親方が主役のヤバいゲーム見つけた【進め！キノピオ隊長】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/13</td>
			<td>01:00:31</td>
			<td><a href='https://youtu.be/g_h3NRiNKxI' target='_blank' class='outlink' rel='nofollow'>【最強鬼畜ゲー
				VS】絶対にキレてはいけないCup Head!!!【圧倒的清楚】</a></td>


		</tr>
		<tr>
			<td>2019/08/15</td>
			<td>01:46:23</td>
			<td><a href='https://youtu.be/F1ETn8CZOco' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】#にじホロ雪山人狼
				projectwinterするッス！！！！！！！【雪山人狼】</a></td>


		</tr>
		<tr>
			<td>2019/08/16</td>
			<td>02:42:38</td>
			<td><a href='https://youtu.be/lrVCnwJQnGg' target='_blank' class='outlink' rel='nofollow'>【#建築王】戦いの中で成長するスバル【マインクラフト】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/18</td>
			<td>01:16:52</td>
			<td><a href='https://youtu.be/rVdY2Fb6uKE' target='_blank' class='outlink' rel='nofollow'>【検証】大空スバルはちゃんと案件放送ができるのか？【アークレゾナ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/19</td>
			<td>02:33:53</td>
			<td><a href='https://youtu.be/oKT-ljZSxLU' target='_blank' class='outlink' rel='nofollow'>【緊急集合】Vtuber甲子園振り返り放送【夏の思い出】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/21</td>
			<td>01:04:38</td>
			<td><a href='https://youtu.be/CZezZehRRpw' target='_blank' class='outlink'
						 rel='nofollow'>【過疎鯖の】ホロ鯖復興したってマ？？？？【行方】</a></td>


		</tr>
		<tr>
			<td>2019/08/22</td>
			<td>00:55:14</td>
			<td><a href='https://youtu.be/yO2fK0VzV6A' target='_blank' class='outlink' rel='nofollow'>【圧倒的】スバ●もんが音感ゲーするようです！！！！！！【アイドル感】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/23</td>
			<td>00:49:56</td>
			<td><a href='https://youtu.be/1AQLDVkviYE' target='_blank' class='outlink'
						 rel='nofollow'>【謝罪の】大空スバルのお歌枠！！！！！【お歌枠】</a></td>


		</tr>
		<tr>
			<td>2019/08/24</td>
			<td>01:39:11</td>
			<td><a href='https://youtu.be/U0hZf1NcVvM' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】あやスバてえてえマイクラ【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/25</td>
			<td>00:57:59</td>
			<td><a href='https://youtu.be/POj3Jn5b9xQ' target='_blank' class='outlink' rel='nofollow'>【真のスバルは】第一回 大空スバル選手権
				【誰だ】</a></td>


		</tr>
		<tr>
			<td>2019/08/26</td>
			<td>01:43:44</td>
			<td><a href='https://youtu.be/N29uj3dKk3o' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】スバル犯人じゃないッス！！信じてください！！！！【Project
				Winter】</a></td>


		</tr>
		<tr>
			<td>2019/08/28</td>
			<td>01:06:58</td>
			<td><a href='https://youtu.be/GH58Uf6ezkE' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】スバル、エンチャントしたいッス！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/30</td>
			<td>00:57:13</td>
			<td><a href='https://youtu.be/OfVFkq5pqZE' target='_blank' class='outlink' rel='nofollow'>【お気持ち】ホロライブメンバーにお手紙をしたためるッス！！【配信】</a>
			</td>


		</tr>
		<tr>
			<td>2019/08/31</td>
			<td>00:59:06</td>
			<td><a href='https://youtu.be/qPuDWou9w1Q' target='_blank' class='outlink' rel='nofollow'>【明日】過疎ホロ鯖救済の最終準備ッス！！【13時～】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/01</td>
			<td>00:49:26</td>
			<td><a href='https://youtu.be/Q7NeRo4Yudw' target='_blank' class='outlink' rel='nofollow'>【生活習慣を】昼夜逆転Vtuberは朝起きることができるのか【正せ！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/01</td>
			<td>00:42:52</td>
			<td><a href='https://youtu.be/RZ5jN_8PFck' target='_blank' class='outlink' rel='nofollow'>【#ホロ鯖救済】ラマ小屋を作るッス！！！【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/01</td>
			<td>00:58:56</td>
			<td><a href='https://youtu.be/Dsn308XHcfs' target='_blank' class='outlink' rel='nofollow'>【#ホロ鯖救済】ラマ小屋を作るッス！！！【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/03</td>
			<td>00:59:26</td>
			<td><a href='https://youtu.be/CwHKz7R4OYo' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】目指せ！！ベストアンサー！！！【大喜利】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/03</td>
			<td>01:17:02</td>
			<td><a href='https://youtu.be/D2WzJqbY4zI' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】陰陽師活動開始ッス！！！！【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/04</td>
			<td>01:51:53</td>
			<td><a href='https://youtu.be/XIFEA3vR6cU' target='_blank' class='outlink' rel='nofollow'>【ホロライブ女学園】チーム大神ミオ、始動ッス！！！！！【3年目！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/05</td>
			<td>00:59:04</td>
			<td><a href='https://youtu.be/R2hlifk9CQ8' target='_blank' class='outlink' rel='nofollow'>【ハイレベル以下で】アイドルなら初見でリズム取れるよなァ？！【即チョコミント】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/06</td>
			<td>01:41:34</td>
			<td><a href='https://youtu.be/pPMI7ITAqjE' target='_blank' class='outlink' rel='nofollow'>【圧倒的そげぶ】「そげぶ」を学ぶスバル
				前編【#とあるIF】</a></td>


		</tr>
		<tr>
			<td>2019/09/08</td>
			<td>05:12:36</td>
			<td><a href='https://youtu.be/nqGfamvuXWo' target='_blank' class='outlink' rel='nofollow'>【おわりの】栄冠ナイン！！ホロライブ女学園！！！【はじまり】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/10</td>
			<td>01:00:34</td>
			<td><a href='https://youtu.be/Ow3h-x2WsGY' target='_blank' class='outlink'
						 rel='nofollow'>【舞スバ】おじおじとお話するッス！！！【雑談】</a></td>


		</tr>
		<tr>
			<td>2019/09/11</td>
			<td>01:19:49</td>
			<td><a href='https://youtu.be/gNHI4zsKSxU' target='_blank' class='outlink' rel='nofollow'>【まったり】スバルの家をネザーにするッス！！！【マインクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/13</td>
			<td>01:00:13</td>
			<td><a href='https://youtu.be/y7t88xaKHKM' target='_blank' class='outlink' rel='nofollow'>【3Dコラボ！】「そげぶ」を学ぼうとしたら誰か来たッス【#とあるIF】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/14</td>
			<td>00:53:57</td>
			<td><a href='https://youtu.be/87ghQhL-k3I' target='_blank' class='outlink' rel='nofollow'>【大喜利？】FAMS!!!!名探偵コナン選手権‼‼‼【twitter探偵？！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/16</td>
			<td>00:48:42</td>
			<td><a href='https://youtu.be/3sJ2q7R1Zmo' target='_blank' class='outlink' rel='nofollow'>【ホロリーグ】大空スバルの個人学力テスト！ in
				cluster</a></td>


		</tr>
		<tr>
			<td>2019/09/17</td>
			<td>01:16:24</td>
			<td><a href='https://youtu.be/-b9u_RvfaXc' target='_blank' class='outlink' rel='nofollow'>【1周年】スバルのつよつよホロライブサマー！！【記念放送】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/18</td>
			<td>01:32:10</td>
			<td><a href='https://youtu.be/CbagAVQNlbI' target='_blank' class='outlink' rel='nofollow'>【圧倒的ガチャ運】「そげぶ」を学ぶスバル
				後編【#とあるIF】</a></td>


		</tr>
		<tr>
			<td>2019/09/20</td>
			<td>01:19:16</td>
			<td><a href='https://youtu.be/QUCsrlz-Ygc' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】緊急避難用地下シェルター作るッス！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/21</td>
			<td>01:00:15</td>
			<td><a href='https://youtu.be/oX39biOocTc' target='_blank' class='outlink'
						 rel='nofollow'>【謝罪】詫びお歌枠！！！！！！！！！！【会見】</a></td>


		</tr>
		<tr>
			<td>2019/09/22</td>
			<td>00:51:45</td>
			<td><a href='https://youtu.be/DmzgZ17Ch18' target='_blank' class='outlink' rel='nofollow'>【おはよう】Vtuber早起き大会（ソロ）！！！！【スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/23</td>
			<td>01:11:45</td>
			<td><a href='https://youtu.be/4bNnAXYCius' target='_blank' class='outlink' rel='nofollow'>【#舞スバ】大空家コラボ！舞スバ一周年振り返り放送！！【一周年】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/25</td>
			<td>00:46:08</td>
			<td><a href='https://youtu.be/qUJEjC6PmJA' target='_blank' class='outlink' rel='nofollow'>【現状報告】ハワイにきたらいきなり命拾いしたッス！！！！【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/30</td>
			<td>00:59:48</td>
			<td><a href='https://youtu.be/gxJl1JnNsvo' target='_blank' class='outlink' rel='nofollow'>【ハワイ旅行記】消えたウッデ〇？！その理由に涙が止まらない…！！！【後編】</a>
			</td>


		</tr>
		<tr>
			<td>2019/09/30</td>
			<td>01:23:40</td>
			<td><a href='https://youtu.be/ivLMD_jbqEw' target='_blank' class='outlink' rel='nofollow'>【新夜廻り】ホラゲー？？余裕ッス！！！！！！！！【あじまる…！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/02</td>
			<td>01:18:17</td>
			<td><a href='https://youtu.be/_SoD-90Buu8' target='_blank' class='outlink' rel='nofollow'>【農家VSアヒル】アヒルが最強になるとこ、みてて！！
				！【Untitled Goose Game】</a></td>


		</tr>
		<tr>
			<td>2019/10/05</td>
			<td>00:59:38</td>
			<td><a href='https://youtu.be/hxyvWfQHSwA' target='_blank' class='outlink' rel='nofollow'>【はやおき】第二回Vtuber早起き大会！！！！（ソロ部門）【スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/06</td>
			<td>00:58:15</td>
			<td><a href='https://youtu.be/fPt_KI1hEDY' target='_blank' class='outlink'
						 rel='nofollow'>【空気読み。】大空スバルはKYなのか？？【２】</a></td>


		</tr>
		<tr>
			<td>2019/10/07</td>
			<td>01:32:47</td>
			<td><a href='https://youtu.be/OM325VWfNPo' target='_blank' class='outlink' rel='nofollow'>【圧倒的】大声出したら即終了？！深夜廻り！！【ホラゲー】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/08</td>
			<td>00:57:10</td>
			<td><a href='https://youtu.be/MygOEN5qjRM' target='_blank' class='outlink' rel='nofollow'>【まったりマイクラ】たのしい監獄づくり！！！！！！【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/11</td>
			<td>01:00:33</td>
			<td><a href='https://youtu.be/w3zkXqwCHQU' target='_blank' class='outlink' rel='nofollow'>【スバおか】絶対笑ってはいけない学園ハンサム【しょたっぴー】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/11</td>
			<td>00:14:54</td>
			<td><a href='https://youtu.be/CjnvAbe7ChY' target='_blank' class='outlink' rel='nofollow'>【ガストコラボ】すき焼きの食レポは●●からっス【#ホロの美食紀行
				第3部】</a></td>


		</tr>
		<tr>
			<td>2019/10/12</td>
			<td>01:35:30</td>
			<td><a href='https://youtu.be/6Gc0Za5PJ6Q' target='_blank' class='outlink' rel='nofollow'>【ホロライブ新鯖】新しいサーバーがあらわれた！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/13</td>
			<td>01:40:40</td>
			<td><a href='https://youtu.be/CVs5Y8R-bQs' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】スバルだっておしゃれクラフトしたいッス！！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/15</td>
			<td>00:56:16</td>
			<td><a href='https://youtu.be/G3wXA4H7E2I' target='_blank' class='outlink' rel='nofollow'>【スバルの】ひとり食わず嫌い選手権！！！！【料理ちから】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/16</td>
			<td>01:27:19</td>
			<td><a href='https://youtu.be/4pg9lB5xy_o' target='_blank' class='outlink' rel='nofollow'>【もう釣り堀って】深夜小声おしゃれマイクラ！！！！【いわせねえッス！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/17</td>
			<td>01:02:21</td>
			<td><a href='https://youtu.be/hQpxqYQcHR0' target='_blank' class='outlink' rel='nofollow'>【陽キャ？】スバ友実態調査アンケート！！【まじめ？】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/18</td>
			<td>00:58:00</td>
			<td><a href='https://youtu.be/PbH30VmKm7E' target='_blank' class='outlink' rel='nofollow'>【IFの世界】ホロライブ10000期生、大空スバル、デビュー配信スバ！！！【ネタ枠】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/19</td>
			<td>01:45:56</td>
			<td><a href='https://youtu.be/WEy7YVjyoAQ' target='_blank' class='outlink' rel='nofollow'>【おしゃクラ】おしゃれな家完成させるッス！！！【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/19</td>
			<td>00:59:33</td>
			<td><a href='https://youtu.be/_oppP9Br7Kw' target='_blank' class='outlink' rel='nofollow'>【おうた】スバルのおうたきいて！！！！！！！【うたう！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/20</td>
			<td>00:55:57</td>
			<td><a href='https://youtu.be/dGA2Xp6xutY' target='_blank' class='outlink' rel='nofollow'>【金のエンゼル】スバルなら秒で金のエンゼル出せる説！！！！【ガチャ！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/20</td>
			<td>00:59:37</td>
			<td><a href='https://youtu.be/ao6posOt16s' target='_blank' class='outlink' rel='nofollow'>【やられる前に】ママに隠されたゲームの必勝法【やれ！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/21</td>
			<td>01:01:56</td>
			<td><a href='https://youtu.be/GhsYjvqdJXw' target='_blank' class='outlink' rel='nofollow'>【神回】視聴者参加型！！ポケモン大喜利！！！ソードシールド編【再び】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/22</td>
			<td>01:14:43</td>
			<td><a href='https://youtu.be/76QGfrNnts0' target='_blank' class='outlink'
						 rel='nofollow'>【天国？】おねショタ選手権！！！！！！【地獄？】</a></td>


		</tr>
		<tr>
			<td>2019/10/23</td>
			<td>00:16:49</td>
			<td><a href='https://youtu.be/-W2saXidw8w' target='_blank' class='outlink' rel='nofollow'>10万人ってまじ？！？！？！？！！？！？！？！？！！？！？！</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/25</td>
			<td>01:28:26</td>
			<td><a href='https://youtu.be/iat6k27SUr0' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】ネザーに向けてダイヤ装備整えるッス！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/27</td>
			<td>04:18:22</td>
			<td><a href='https://youtu.be/zv_PPm4eIdo' target='_blank' class='outlink' rel='nofollow'>【圧倒的】ポジティブシンキングで乗り切るOUTLAST！！【初見】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/27</td>
			<td>00:59:40</td>
			<td><a href='https://youtu.be/sf54XogT5zA' target='_blank' class='outlink' rel='nofollow'>【てえてえ】FAMSでディズニーシー行ってきた！！！【旅行記】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/28</td>
			<td>01:08:42</td>
			<td><a href='https://youtu.be/yoV5m1kU-ew' target='_blank' class='outlink' rel='nofollow'>【ぜったいに】しょぼんのアクション！！リベンジ！！！【キレてはいけない】</a>
			</td>


		</tr>
		<tr>
			<td>2019/10/29</td>
			<td>01:51:22</td>
			<td><a href='https://youtu.be/kOtuMKqDIGg' target='_blank' class='outlink' rel='nofollow'>【萌え系を】圧倒的陽キャが挑戦する！！！ライザのアトリエ【学ぶ！？】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/01</td>
			<td>01:32:00</td>
			<td><a href='https://youtu.be/1VdskQQ0Jpo' target='_blank' class='outlink' rel='nofollow'>【本物の虚無を】ハロウィンだから悪魔祓いの塔作るッス！！！！【分からせる！！】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/01</td>
			<td>02:04:34</td>
			<td><a href='https://youtu.be/QkuVrSgpI7k' target='_blank' class='outlink' rel='nofollow'>【#雑ホロ杯】マリカーでホロライブ最強になるッス！！！！！【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/02</td>
			<td>01:10:16</td>
			<td><a href='https://youtu.be/n6XIPmxksco' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】5位以下でアイドル剥奪？！キャラ変マリカ！！【マリオカート８】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/03</td>
			<td>02:39:27</td>
			<td><a href='https://youtu.be/_9iHQXqO8kU' target='_blank' class='outlink' rel='nofollow'>【最後まで】圧倒的ポジティブで乗り切るOUTLAST！！【やり遂げないと終われない】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/03</td>
			<td>01:00:52</td>
			<td><a href='https://youtu.be/HgF1MJj0Qgg' target='_blank' class='outlink' rel='nofollow'>【#ホロ鯖鬼ごっこ】大空スバル支店！！ハロウィン鬼ごっこッス！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/04</td>
			<td>01:48:55</td>
			<td><a href='https://youtu.be/nBSyZU7lrWI' target='_blank' class='outlink' rel='nofollow'>【まったり】ハロウィンの悪夢を終わらせるッス！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/05</td>
			<td>01:04:30</td>
			<td><a href='https://youtu.be/pImQLgEHEH4' target='_blank' class='outlink' rel='nofollow'>【 #おにひとねこ
				】その件に関して謝罪しながらマリカするッス！！！【詫びカート】</a></td>


		</tr>
		<tr>
			<td>2019/11/10</td>
			<td>00:55:49</td>
			<td><a href='https://youtu.be/aHSyxNv3a0Q' target='_blank' class='outlink'
						 rel='nofollow'>【#ホロライブ杯】心を込めて走ります【禊マリカ】</a></td>


		</tr>
		<tr>
			<td>2019/11/11</td>
			<td>01:00:02</td>
			<td><a href='https://youtu.be/DIpC2UCiX5s' target='_blank' class='outlink' rel='nofollow'>【体育会マネージャーの】大空スバルが可愛くリングフィットするだけ【本気】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/12</td>
			<td>01:06:10</td>
			<td><a href='https://youtu.be/Gzk2rkrRoEk' target='_blank' class='outlink' rel='nofollow'>【アイドルアヒルの】ついにやるぜ！！！お絵描き心理テスト！！！！【本性】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/13</td>
			<td>01:07:20</td>
			<td><a href='https://youtu.be/Wpo2yTo6NHY' target='_blank' class='outlink' rel='nofollow'>【雑談という】アイドルなら雑談も余裕だよなあ？！【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/16</td>
			<td>04:04:19</td>
			<td><a href='https://youtu.be/Fdh9mZgQdqQ' target='_blank' class='outlink' rel='nofollow'>【ポケモンソード】16時間耐久リレー！にじおっさんずVSホロFAMS
				スバル枠【#にじホロポケモン対決】</a></td>


		</tr>
		<tr>
			<td>2019/11/16</td>
			<td>01:02:02</td>
			<td><a href='https://youtu.be/jnJGo2GajTk' target='_blank' class='outlink' rel='nofollow'>【ポケモンソード】16時間耐久リレー！にじおっさんずVSホロFAMS
				ホロライブFAMS決戦枠【#にじホロポケモン対決】</a></td>


		</tr>
		<tr>
			<td>2019/11/18</td>
			<td>00:57:13</td>
			<td><a href='https://youtu.be/E0_1pmxmw_A' target='_blank' class='outlink' rel='nofollow'>【まったり】久しぶりにマイクラで釣りするッス！！！！！！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/19</td>
			<td>01:04:35</td>
			<td><a href='https://youtu.be/khSJUDHAzP4' target='_blank' class='outlink' rel='nofollow'>【アニソン】アヒル系アイドルのお歌わく！！！！！！【新曲あるよ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/20</td>
			<td>00:59:22</td>
			<td><a href='https://youtu.be/KCY7m4q0NMY' target='_blank' class='outlink' rel='nofollow'>【ホロライブ】もう後輩にはボコられないッス！！！！【スプラ部】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/20</td>
			<td>00:55:48</td>
			<td><a href='https://youtu.be/5NtNvKuQWr4' target='_blank' class='outlink' rel='nofollow'>【運営】ホロライブ社の秘密大暴露アンケート！！【許可済み】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/25</td>
			<td>01:05:14</td>
			<td><a href='https://youtu.be/PD48xUDCJqc' target='_blank' class='outlink' rel='nofollow'>【最早】絶対にセンシティブになる心理テスト VS
				絶対にセンシティブにならないアイドル【才能】</a></td>


		</tr>
		<tr>
			<td>2019/11/26</td>
			<td>00:58:04</td>
			<td><a href='https://youtu.be/u70pVEc3UbI' target='_blank' class='outlink' rel='nofollow'>【あやスバ】five nights at
				freddy's初見プレイするッス！【ホラゲー】</a></td>


		</tr>
		<tr>
			<td>2019/11/28</td>
			<td>01:08:08</td>
			<td><a href='https://youtu.be/eYY96baIpSA' target='_blank' class='outlink' rel='nofollow'>【方言】お悩み相談アイドルしようと思ったら今のところ9割クソマロでワロタ【マシュマロ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/11/29</td>
			<td>00:52:28</td>
			<td><a href='https://youtu.be/4OpClEycqxU' target='_blank' class='outlink' rel='nofollow'>【オーディション】Vtuberが地上波テレビドラマのオーディション受けた結果ｗｗｗｗｗｗ【レポ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/01</td>
			<td>01:16:33</td>
			<td><a href='https://youtu.be/v5sTsVjKaOU' target='_blank' class='outlink' rel='nofollow'>【死ぬ気で】おしゃクラ！！！12時に起きれたらスバルのお家完全ビフォーアフター【起きる】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/03</td>
			<td>01:35:25</td>
			<td><a href='https://youtu.be/TxtuJC_TwaE' target='_blank' class='outlink' rel='nofollow'>【負けたら】おい、UNOしろよ…！！！！！！【罰ゲーム】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/04</td>
			<td>01:31:22</td>
			<td><a href='https://youtu.be/6SghG7ohLpA' target='_blank' class='outlink' rel='nofollow'>【越えられない】Five Nights at
				Freddy`s! スバルの1人でピザバイトできるもん！！！【夜はない】</a></td>


		</tr>
		<tr>
			<td>2019/12/06</td>
			<td>01:13:01</td>
			<td><a href='https://youtu.be/AtzRXy-aKz0' target='_blank' class='outlink' rel='nofollow'>【神ゲーと虚無ゲーの】cities:Skylines
				まったり話しながら都市作りするッス！！【狭間】</a></td>


		</tr>
		<tr>
			<td>2019/12/07</td>
			<td>01:22:41</td>
			<td><a href='https://youtu.be/L87zOXLrLV8' target='_blank' class='outlink' rel='nofollow'>【風邪に】マイクラ！クリスマスツリーをつくるよ【気を付けろ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/07</td>
			<td>00:57:12</td>
			<td><a href='https://youtu.be/P-YLgBuCepQ' target='_blank' class='outlink' rel='nofollow'>【共感性羞恥心】リスナー参加型！黒歴史蟲毒選手権【爆発】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/08</td>
			<td>01:39:17</td>
			<td><a href='https://youtu.be/Bagjt0UhXeA' target='_blank' class='outlink' rel='nofollow'>【まったり】もうウソッキーとは呼ばせないクリスマスツリー【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/09</td>
			<td>01:05:08</td>
			<td><a href='https://youtu.be/9Mq1yNxwNyo' target='_blank' class='outlink' rel='nofollow'>【リベンジ】久しぶりにセンシティブ心理テストと戦うよ【マッチ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/11</td>
			<td>01:04:12</td>
			<td><a href='https://youtu.be/RZ0t4zYNKh8' target='_blank' class='outlink' rel='nofollow'>【IQ】天才アイドルが最強の脳トレに挑む！！！【1億兆】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/12</td>
			<td>01:40:39</td>
			<td><a href='https://youtu.be/N8F79dGgDGA' target='_blank' class='outlink' rel='nofollow'>【圧倒的】ウォーキングデッドガチ勢の60seconds!【初見】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/14</td>
			<td>01:08:17</td>
			<td><a href='https://youtu.be/0S-1Vem-wM4' target='_blank' class='outlink' rel='nofollow'>【まったり】普通のJKが1年間企業所属Vtuberやった結果ｗ【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/15</td>
			<td>01:28:22</td>
			<td><a href='https://youtu.be/TwwjhuBKwsM' target='_blank' class='outlink' rel='nofollow'>【まったり】ホロライブあったけてえてえクリパ会場つくり！！！【マイクラ】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/16</td>
			<td>01:20:29</td>
			<td><a href='https://youtu.be/S6LCbAdOFAc' target='_blank' class='outlink' rel='nofollow'>【もう二度と】citiise:skylines
				スバル、市長になるッス！！！【滅ぼさない】</a></td>


		</tr>
		<tr>
			<td>2019/12/17</td>
			<td>01:22:14</td>
			<td><a href='https://youtu.be/DrawtvY__c8' target='_blank' class='outlink' rel='nofollow'>【デス・リバーを】Cities:Skylines
				圧倒的鬼門の川越え問題！！スバル市長の出した答えは…【越えたい】</a></td>


		</tr>
		<tr>
			<td>2019/12/18</td>
			<td>01:05:04</td>
			<td><a href='https://youtu.be/ZWFtleN0NQE' target='_blank' class='outlink' rel='nofollow'>【伝説の】スバルが芸人とかいってる人ちょっと恋や！！！【歌枠】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/20</td>
			<td>01:04:27</td>
			<td><a href='https://youtu.be/gwWEI-uNoTc' target='_blank' class='outlink' rel='nofollow'>【5連敗で】すばるさまの視聴者参加ソーセージレジェンド【放送終了】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/21</td>
			<td>00:19:52</td>
			<td><a href='https://youtu.be/upbzWbx42DM' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】Slither.io！最強ミミズ王はスバルさま！！！！【#ホロライブミミズ王】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/22</td>
			<td>02:55:12</td>
			<td><a href='https://youtu.be/G9p_Vbe01kY' target='_blank' class='outlink' rel='nofollow'>【最終回】すばるさまの全クリするまで終われないピザバイト【Five
				Nights at Freddy`s!】</a></td>


		</tr>
		<tr>
			<td>2019/12/23</td>
			<td>00:55:57</td>
			<td><a href='https://youtu.be/oXg0kyAAz7U' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】目指せ参加者20人越え？！すばるさまのホロライブマイクラクリスマスパーティー【MineCraft】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/25</td>
			<td>01:03:11</td>
			<td><a href='https://youtu.be/eFoyFhUj6lw' target='_blank' class='outlink' rel='nofollow'>【12万人】すばるさまのクリスマス敗北雑談【記念】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/28</td>
			<td>01:10:53</td>
			<td><a href='https://youtu.be/BleJcgm2PMc' target='_blank' class='outlink' rel='nofollow'>【minecraft】2019年ツリーお焚き上げ会場【年の瀬】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/29</td>
			<td>01:06:26</td>
			<td><a href='https://youtu.be/UguGG7uhsjQ' target='_blank' class='outlink' rel='nofollow'>【29日】起きれてえらいすばるさまの朝れぢお【朝10時】</a>
			</td>


		</tr>
		<tr>
			<td>2019/12/29</td>
			<td>01:36:15</td>
			<td><a href='https://youtu.be/McM0Ps4d1os' target='_blank' class='outlink' rel='nofollow'>【圧倒的】GTAⅤ！スバルさまのサイコキラー生活1日目【初見】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/01</td>
			<td>00:29:20</td>
			<td><a href='https://youtu.be/zNfcGqZXJvA' target='_blank' class='outlink' rel='nofollow'>【ソバ屋の】あけおめ！！スバルの新春新衣装おひろめ会！！【本気】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/03</td>
			<td>02:01:32</td>
			<td><a href='https://youtu.be/zOxWN8HEhZw' target='_blank' class='outlink' rel='nofollow'>【第一章】ホロ鯖マイクラ！ホロ警察アヒラック始動【全ロス】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/03</td>
			<td>01:51:11</td>
			<td><a href='https://youtu.be/vdVvK3_8bIM' target='_blank' class='outlink' rel='nofollow'>【ス虐の時代】GTAⅤ！すばるさまの悠々自適サイコキラー生活【終了】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/04</td>
			<td>01:05:51</td>
			<td><a href='https://youtu.be/MmzOr0xBmKo' target='_blank' class='outlink' rel='nofollow'>【第二章】ホロライブ警察アヒラック！！拠点づくり！！【炎上】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/04</td>
			<td>00:58:05</td>
			<td><a href='https://youtu.be/xL_NYO0hS24' target='_blank' class='outlink' rel='nofollow'>【心が】新春のおうたあああああああああああああああ【死にかける】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/05</td>
			<td>01:03:37</td>
			<td><a href='https://youtu.be/XFqFfj1ki74' target='_blank' class='outlink' rel='nofollow'>【EMILY WANTS TO
				PLAY】ピザを届けに来たと思ったら呪われた家で優勝した【初見】</a></td>


		</tr>
		<tr>
			<td>2020/01/06</td>
			<td>00:16:45</td>
			<td><a href='https://youtu.be/_RvjM8vCm8E' target='_blank' class='outlink' rel='nofollow'>【我】覚醒したスバルさまの7位以下終了マリカ【ホロライブぞ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/07</td>
			<td>01:09:27</td>
			<td><a href='https://youtu.be/2igNi15ZyV4' target='_blank' class='outlink' rel='nofollow'>【嫌なことは】GTAV！すばるさまのキラキラサイコキラー生活3日目【燃やす】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/08</td>
			<td>01:31:12</td>
			<td><a href='https://youtu.be/fru-3jMTePw' target='_blank' class='outlink' rel='nofollow'>【ス虐の時代】スーパーマリオパーティー！！優勝はスバルさまに決まってんだろ！！！【終了】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/10</td>
			<td>01:29:20</td>
			<td><a href='https://youtu.be/Y8Q9W7CWRvo' target='_blank' class='outlink' rel='nofollow'>【初】GTAⅤ！世界最強はスバルさま！！！！【強盗ミッション！】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/11</td>
			<td>01:02:57</td>
			<td><a href='https://youtu.be/F0T87nhZif8' target='_blank' class='outlink'
						 rel='nofollow'>【まったり】おはようスバルさま【おきたて雑談】</a></td>


		</tr>
		<tr>
			<td>2020/01/11</td>
			<td>01:02:55</td>
			<td><a href='https://youtu.be/PH3EQWidBIs' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】新春運試し！！ソーセージレジェンド大会！！！！【分からせ型】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/12</td>
			<td>01:00:06</td>
			<td><a href='https://youtu.be/ozhjgSMQ5hM' target='_blank' class='outlink' rel='nofollow'>【早起き】おあようスバルさま【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/13</td>
			<td>01:01:44</td>
			<td><a href='https://youtu.be/F3kVAuUHvnc' target='_blank' class='outlink' rel='nofollow'>【オフコラボ】大空スバル、敗北するってよ。【＃スバおかおっぱっぴー】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/15</td>
			<td>01:04:10</td>
			<td><a href='https://youtu.be/KAIW2cC38js' target='_blank' class='outlink' rel='nofollow'>【体験レポート】アイドルがメイド喫茶にカチ込みした結果【スバおか】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/17</td>
			<td>01:39:50</td>
			<td><a href='https://youtu.be/V0ddZe8YTOs' target='_blank' class='outlink'
						 rel='nofollow'>【第三章】1から始める刑務所建築【素材集め】</a></td>


		</tr>
		<tr>
			<td>2020/01/18</td>
			<td>01:04:08</td>
			<td><a href='https://youtu.be/vUN_Nxj9xAU' target='_blank' class='outlink'
						 rel='nofollow'>【まったり】おはようスバルさま【起きたて雑談】</a></td>


		</tr>
		<tr>
			<td>2020/01/18</td>
			<td>00:01:43</td>
			<td><a href='https://youtu.be/qrZtEACCwIU' target='_blank' class='outlink'
						 rel='nofollow'>【ガチ恋】どぅーまいべすと！歌ってみた！【ぢろ】</a></td>


		</tr>
		<tr>
			<td>2020/01/18</td>
			<td>01:09:41</td>
			<td><a href='https://youtu.be/jNLo0vBXv_4' target='_blank' class='outlink' rel='nofollow'>【初トレバ】課金額が1000円増える毎に親にLINEする大空スバル【キメる】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/19</td>
			<td>01:48:13</td>
			<td><a href='https://youtu.be/gFK2V906LJc' target='_blank' class='outlink' rel='nofollow'>【NO
				マグマダイブ】マイクラ先生の怒りを鎮める？！すばるさまの鉱山開発【NO LIFE】</a></td>


		</tr>
		<tr>
			<td>2020/01/19</td>
			<td>01:00:35</td>
			<td><a href='https://youtu.be/h092vOLywJM' target='_blank' class='outlink' rel='nofollow'>【大空家】探偵スバルスクープ！！スバルの衣装の秘密に迫る…！！！【コラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/20</td>
			<td>01:25:55</td>
			<td><a href='https://youtu.be/X3q5zMLU9IM' target='_blank' class='outlink' rel='nofollow'>【サイコキラー生活】GTAVで大暴れす！！！！！！！！！！！！！！！！！！る！！【5日目】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/21</td>
			<td>00:31:51</td>
			<td><a href='https://youtu.be/l7QUoicthoM' target='_blank' class='outlink' rel='nofollow'>【Vtuberが集まる（って欲しい）】ソバルのスバ屋さん【ソバ屋】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/22</td>
			<td>02:04:27</td>
			<td><a href='https://youtu.be/w1t0MgDCZH0' target='_blank' class='outlink' rel='nofollow'>【絶対】クリーパー絶対許さないマン！！！大空スバル！！！【許さん】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/23</td>
			<td>01:00:23</td>
			<td><a href='https://youtu.be/GOndO4YSS0I' target='_blank' class='outlink' rel='nofollow'>【お歌】すばるさまの放課後ド緊張雑談会！！しにそう！！！【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/25</td>
			<td>01:24:34</td>
			<td><a href='https://youtu.be/k_9w-3x5do8' target='_blank' class='outlink' rel='nofollow'>【#おわらないホロライブ】ライブの裏話レポートとかアニメの話とか【大空スバル/ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/26</td>
			<td>01:12:36</td>
			<td><a href='https://youtu.be/TiAHRi3WM-c' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/26</td>
			<td>01:48:20</td>
			<td><a href='https://youtu.be/e8zahREQt9Q' target='_blank' class='outlink' rel='nofollow'>【完全初見#1】アンダーテールする！！！【初心者運転】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/27</td>
			<td>02:01:16</td>
			<td><a href='https://youtu.be/9KR8XMJCLKc' target='_blank' class='outlink' rel='nofollow'>【完全初見#2】アンダーテール！パピリスとサンズはズッ友ッス！！！【初心者運転】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/29</td>
			<td>01:03:43</td>
			<td><a href='https://youtu.be/I4wouNP9EC8' target='_blank' class='outlink' rel='nofollow'>【体験】コスプレカフェに母ちゃんと行ったら軍人に根性叩き直されたの巻【
				レポート】</a></td>


		</tr>
		<tr>
			<td>2020/01/30</td>
			<td>01:28:02</td>
			<td><a href='https://youtu.be/EA5wlZ29mEs' target='_blank' class='outlink' rel='nofollow'>【完全初見#3】パピルス・・・おまえ・・・裏切るのか・・・？？？？？【初心者🔰】</a>
			</td>


		</tr>
		<tr>
			<td>2020/01/31</td>
			<td>01:47:06</td>
			<td><a href='https://youtu.be/tUD46kVJH58' target='_blank' class='outlink' rel='nofollow'>【初心者🔰】ティラノサウルスの神になる！！！！！【ARK】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/01</td>
			<td>06:05:21</td>
			<td><a href='https://youtu.be/rOkgRexJ6PY' target='_blank' class='outlink' rel='nofollow'>【アンダーテール】最終回？！トリエル生存ルート！やる！！！！！！【耐久】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/01</td>
			<td>00:35:59</td>
			<td><a href='https://youtu.be/KNVM-Ka-qa0' target='_blank' class='outlink' rel='nofollow'>【初地獄】会って０秒で即コラボ？！ホロライブ明るいメンヘラ組お見合い企画【
				#トワスバ 】</a></td>


		</tr>
		<tr>
			<td>2020/02/03</td>
			<td>01:51:08</td>
			<td><a href='https://youtu.be/UmUyPHK4r3c' target='_blank' class='outlink' rel='nofollow'>【初！！】ARK！！！最強拠点を作ってぼろ儲けッス！！！！【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/06</td>
			<td>03:37:50</td>
			<td><a href='https://youtu.be/8iXGFVfKYgc' target='_blank' class='outlink' rel='nofollow'>【UNDERTALE】Pルートで号泣するだけのスバル
				【初見Pルート攻略】</a></td>


		</tr>
		<tr>
			<td>2020/02/06</td>
			<td>01:54:22</td>
			<td><a href='https://youtu.be/MndFEme2vlM' target='_blank' class='outlink' rel='nofollow'>【ARK】最早なんでもいいからテイムしたいスバルさま【ホロ鯖】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/07</td>
			<td>02:47:25</td>
			<td><a href='https://youtu.be/y0_v9yn1Dyk' target='_blank' class='outlink' rel='nofollow'>【初見実況】魔女の家クリアまでするぞ！！！！！！！【ホラゲー】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/08</td>
			<td>00:57:43</td>
			<td><a href='https://youtu.be/bfFiLi9AbP0' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/08</td>
			<td>11:27:42</td>
			<td><a href='https://youtu.be/4E26wfjgXyM' target='_blank' class='outlink' rel='nofollow'>【Undertale】鬼畜ゲー？！アンダーテール最難関Gルート耐久【G
				route】</a></td>


		</tr>
		<tr>
			<td>2020/02/09</td>
			<td>11:40:12</td>
			<td><a href='https://youtu.be/Sm-NarxvLoo' target='_blank' class='outlink' rel='nofollow'>【サンズ戦】鬼畜ゲー？！アンダーテール最難関Gルート耐久最終回【Undertale
				/ G route】</a></td>


		</tr>
		<tr>
			<td>2020/02/11</td>
			<td>00:42:34</td>
			<td><a href='https://youtu.be/a48RJarJTuI' target='_blank' class='outlink' rel='nofollow'>【サンズ戦】鬼畜ゲー？！アンダーテール最難関Gルート耐久本当の最終回【Undertale
				/ G route】</a></td>


		</tr>
		<tr>
			<td>2020/02/11</td>
			<td>01:17:58</td>
			<td><a href='https://youtu.be/Lwzn3Aj79g4' target='_blank' class='outlink' rel='nofollow'>【アンテ】アンテの感想話したり雑談したり【お疲れさまでした】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/12</td>
			<td>04:04:06</td>
			<td><a href='https://youtu.be/d1SSxco7kMs' target='_blank' class='outlink' rel='nofollow'>【初見実況】デルタルーンする！！！！！！！！【DELTARUNE】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/13</td>
			<td>01:14:06</td>
			<td><a href='https://youtu.be/hTm8wywSVd8' target='_blank' class='outlink' rel='nofollow'>【リスナー参加型】気が向くままにお悩み解決する枠【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/14</td>
			<td>01:06:31</td>
			<td><a href='https://youtu.be/Muy7B9S4bDc' target='_blank' class='outlink' rel='nofollow'>【#大空家】バレンタインボイス仕様の地獄です2020年ばーじょん【地獄】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/15</td>
			<td>05:28:08</td>
			<td><a href='https://youtu.be/YmNxQuc_Dx0' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVE
				功夫編・SF編やる！！！！【初見実況】</a></td>


		</tr>
		<tr>
			<td>2020/02/16</td>
			<td>01:04:23</td>
			<td><a href='https://youtu.be/PDKODvnwpmc' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/16</td>
			<td>01:43:10</td>
			<td><a href='https://youtu.be/Dz7ybNoNsUc' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVE
				西部編やる！！！！！【初見実況】</a></td>


		</tr>
		<tr>
			<td>2020/02/17</td>
			<td>01:36:03</td>
			<td><a href='https://youtu.be/_g64_E7FrW0' target='_blank' class='outlink' rel='nofollow'>【負けたら】ジョイコンを信じろ！！！ソロマリパ【スバおか鼻うがい】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/18</td>
			<td>02:00:47</td>
			<td><a href='https://youtu.be/dlHL70seLbo' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVE
				やる！！！！現代編【初見実況】</a></td>


		</tr>
		<tr>
			<td>2020/02/21</td>
			<td>00:56:44</td>
			<td><a href='https://youtu.be/TtkbSpIcVic' target='_blank' class='outlink' rel='nofollow'>【まったり】おばあちゃんちの居間でお話しするよ【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/23</td>
			<td>04:07:08</td>
			<td><a href='https://youtu.be/6SP4y5i7FYc' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVEまったりやるぞ！！！原始編、幕末編前半【初見実況】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/23</td>
			<td>01:09:01</td>
			<td><a href='https://youtu.be/itMPfxN-_20' target='_blank' class='outlink' rel='nofollow'>【フブスバ】スバルの知らない世界：オタク用語の世界【初コラボ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/24</td>
			<td>00:56:02</td>
			<td><a href='https://youtu.be/8PgaJBkjiBs' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/24</td>
			<td>05:23:15</td>
			<td><a href='https://youtu.be/tc8RUW-nAj4' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVEやる！！！！！幕末編後半、近未来編前半【初見実況】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/25</td>
			<td>01:30:58</td>
			<td><a href='https://youtu.be/OFbvBL9ereI' target='_blank' class='outlink' rel='nofollow'>【初レトロゲー】LIVE_A_LIVE
				近未来編最終回【初見実況】</a></td>


		</tr>
		<tr>
			<td>2020/02/26</td>
			<td>00:18:12</td>
			<td><a href='https://youtu.be/5G528ZLD-Qo' target='_blank' class='outlink' rel='nofollow'>【#OKFAMS】大空スバル緊急地獄放送【獄激辛ペヤング】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/28</td>
			<td>04:39:19</td>
			<td><a href='https://youtu.be/kIuEl_zMgH0' target='_blank' class='outlink' rel='nofollow'>【#スバおかOPP】LIVE_A_LIVE最終回！！！！！！！中世編【初見実況】</a>
			</td>


		</tr>
		<tr>
			<td>2020/02/29</td>
			<td>08:45:31</td>
			<td><a href='https://youtu.be/NnMZOTisHxI' target='_blank' class='outlink' rel='nofollow'>【まったり耐久】LIVE_A_LIVE　魔王を救いにいくRPG最終章やる！！！！！！！！！【初見実況】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/01</td>
			<td>01:03:48</td>
			<td><a href='https://youtu.be/z_NhirfDfQg' target='_blank' class='outlink' rel='nofollow'>【まったり】こんにちわスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/01</td>
			<td>01:07:41</td>
			<td><a href='https://youtu.be/TEg49-cxz54' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】春高！？第三回ソーセージレジェンド大会！！【ガチンコバトル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/02</td>
			<td>01:44:26</td>
			<td><a href='https://youtu.be/Em0cJAhmfaI' target='_blank' class='outlink'
						 rel='nofollow'>【ホラゲー】コンビニ夜勤するよ【初見実況】</a></td>


		</tr>
		<tr>
			<td>2020/03/03</td>
			<td>03:02:02</td>
			<td><a href='https://youtu.be/4zCGlq_1Dg4' target='_blank' class='outlink' rel='nofollow'>【初見実況】ibする！！！！！！！！！！！【ホラゲー？】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/03</td>
			<td>01:20:47</td>
			<td><a href='https://youtu.be/Xi4wWiZ-2-c' target='_blank' class='outlink' rel='nofollow'>【IQ】学力テストする！！！！！！！！！！！！！【5憶】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/04</td>
			<td>03:48:28</td>
			<td><a href='https://youtu.be/phXH2ftqyGg' target='_blank' class='outlink' rel='nofollow'>【初見実況】ibクリアまでする！！！！！！【最終回】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/07</td>
			<td>05:50:07</td>
			<td><a href='https://youtu.be/juJNs-o1pqU' target='_blank' class='outlink'
						 rel='nofollow'>【初見実況】クロノ・トリガー耐久#１【初日】</a></td>


		</tr>
		<tr>
			<td>2020/03/07</td>
			<td>01:08:36</td>
			<td><a href='https://youtu.be/vLmQ7jvQPAo' target='_blank' class='outlink' rel='nofollow'>【まったり】歯医者に行って死にそうになったよ雑談【お話し】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/08</td>
			<td>04:58:03</td>
			<td><a href='https://youtu.be/4u8Cnp70fQc' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガー耐久#2【精神と時の部屋】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/08</td>
			<td>01:08:10</td>
			<td><a href='https://youtu.be/W8LvZ0QflHw' target='_blank' class='outlink' rel='nofollow'>【地獄】この世で一番苦い物決める！！！！！！！！！【企画】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/10</td>
			<td>01:09:08</td>
			<td><a href='https://youtu.be/DIyhiYfeIL4' target='_blank' class='outlink' rel='nofollow'>【君が】視聴者の中から「１人」を見つける企画【主役かもしれない】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/11</td>
			<td>02:59:42</td>
			<td><a href='https://youtu.be/jkgZkQ5LLKc' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガー進める#3【精神と時の部屋】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/12</td>
			<td>01:30:49</td>
			<td><a href='https://youtu.be/JbdLjGzVnUs' target='_blank' class='outlink' rel='nofollow'>【まったり】みんなの話を聞いたりスバルが話したりする枠【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/14</td>
			<td>04:54:23</td>
			<td><a href='https://youtu.be/6X324JGDQXk' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガーやる！！！！！！！！！！#4【恐竜人と大地のおきて】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/14</td>
			<td>01:10:24</td>
			<td><a href='https://youtu.be/WDbrAoG8zzc' target='_blank' class='outlink' rel='nofollow'>【初見実況】P.T.の完成版？！VISAGEで漢気を見せつけるホワイトデー【最恐ホラゲー】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/15</td>
			<td>05:11:20</td>
			<td><a href='https://youtu.be/lsC7m9YE-Hk' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガーやる！！！！！！！！！#5【ラヴォスの呼び声】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/15</td>
			<td>01:18:43</td>
			<td><a href='https://youtu.be/UqHzbrRS1b0' target='_blank' class='outlink' rel='nofollow'>【初見実況】IQ5億なので入国審査とか余裕です！！！【Papers,Please】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/17</td>
			<td>01:01:44</td>
			<td><a href='https://youtu.be/4E2vGFoWAh8' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】5位以下で即罰ゲーム？！地獄マリカ！！！！【かかってこいや】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/18</td>
			<td>01:54:28</td>
			<td><a href='https://youtu.be/oKaPPfV3cKg' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】はじめめして死への７日【7days
				to die】</a></td>


		</tr>
		<tr>
			<td>2020/03/18</td>
			<td>02:06:19</td>
			<td><a href='https://youtu.be/TJzuCGGmxcc' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガーやる！！！！！！！！！#6【虹色の貝殻さがす】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/19</td>
			<td>02:03:50</td>
			<td><a href='https://youtu.be/Zac38GLwLPg' target='_blank' class='outlink' rel='nofollow'>【人生初】あつめろどうぶつの森　初日【どうぶつの森シリーズ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/20</td>
			<td>02:21:18</td>
			<td><a href='https://youtu.be/ywGUzwwhxv4' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】上げろスキル！！集めろ最強物資！！やれよ戦闘！！【7days
				to die】</a></td>


		</tr>
		<tr>
			<td>2020/03/20</td>
			<td>02:23:48</td>
			<td><a href='https://youtu.be/WFvk3RcFQ_0' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガーやる！！！！！！！！！#7【ロボ子さんの故郷】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/21</td>
			<td>05:07:10</td>
			<td><a href='https://youtu.be/wwoFveWk1sM' target='_blank' class='outlink' rel='nofollow'>【初見実況】クロノ・トリガーやる！！！！！！！！！#8【最終回】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/22</td>
			<td>01:00:21</td>
			<td><a href='https://youtu.be/5S5X_p06kC4' target='_blank' class='outlink' rel='nofollow'>【魚釣り大会直前】運気を上げる画像を眺めてみんなで「運気」を上げましょう【オラに力を！！】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/23</td>
			<td>02:31:08</td>
			<td><a href='https://youtu.be/9gBUiVJl1R4' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第1話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/25</td>
			<td>01:32:26</td>
			<td><a href='https://youtu.be/ec9YQanmwNQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第2話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/25</td>
			<td>01:12:10</td>
			<td><a href='https://youtu.be/ZtaMNMlQ9HI' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】大空家テトリス大会？？優勝するにきまってんだろ！！！【ガチ練枠】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/26</td>
			<td>01:37:53</td>
			<td><a href='https://youtu.be/7jLLWuJ3b7A' target='_blank' class='outlink' rel='nofollow'>【越えろ】ホロ鯖！！生き残れなさそうな7days
				to die【7日目の襲撃！】</a></td>


		</tr>
		<tr>
			<td>2020/03/28</td>
			<td>01:04:30</td>
			<td><a href='https://youtu.be/3kbmoz5Edoo' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/28</td>
			<td>02:19:02</td>
			<td><a href='https://youtu.be/8C0Zx7s6h_M' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第3話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/28</td>
			<td>01:50:24</td>
			<td><a href='https://youtu.be/GA8GlsNgHHk' target='_blank' class='outlink' rel='nofollow'>【襲撃突入】ホロ鯖！！生き残れなさそうな7days
				to dieの7日目【そして…】</a></td>


		</tr>
		<tr>
			<td>2020/03/29</td>
			<td>01:48:52</td>
			<td><a href='https://youtu.be/jpfPtpVhRgU' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第4話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/29</td>
			<td>00:56:25</td>
			<td><a href='https://youtu.be/txayJ_FMvB4' target='_blank' class='outlink' rel='nofollow'>【メンタル】うた【サイコブレイク】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/30</td>
			<td>01:10:25</td>
			<td><a href='https://youtu.be/xsnvZc2U8so' target='_blank' class='outlink' rel='nofollow'>【#OKFAMS】ス虐の時代終了！！！！！！！！あつ森釣りバトル！！！！【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2020/03/31</td>
			<td>01:35:22</td>
			<td><a href='https://youtu.be/7X2l2X3UtWE' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】あつ森のスバルの家を0から視聴者がコーディネートする企画【アイドルの部屋公開】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/01</td>
			<td>02:01:32</td>
			<td><a href='https://youtu.be/CLvO0wR0z3A' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第5話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/02</td>
			<td>01:01:51</td>
			<td><a href='https://youtu.be/j7pscvBhPWc' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】大空家テトリス大会練習日記！！プレイ時間20時間目【ガチ練枠】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/02</td>
			<td>01:13:40</td>
			<td><a href='https://youtu.be/cvujl6MhrQE' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】あつまれ！！！！色んな職業！！！！！【職業体験】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/04</td>
			<td>01:15:31</td>
			<td><a href='https://youtu.be/tv08sdsE-Xc' target='_blank' class='outlink' rel='nofollow'>【まったり】おはようスバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/04</td>
			<td>02:04:52</td>
			<td><a href='https://youtu.be/OdOoC4CTSN0' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第6話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/04</td>
			<td>01:27:54</td>
			<td><a href='https://youtu.be/UwAnMdxlAgo' target='_blank' class='outlink' rel='nofollow'>【 #大空家テトリス
				】初心者が30時間テトリスを続けた結果…？！優勝するぞ！！！【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2020/04/05</td>
			<td>02:44:15</td>
			<td><a href='https://youtu.be/qjqNU-3glfE' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【第7話】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/05</td>
			<td>01:19:15</td>
			<td><a href='https://youtu.be/6GP4GetiGp8' target='_blank' class='outlink' rel='nofollow'>【19万人記念】ぶっちゃけマシュマロトーク！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/06</td>
			<td>00:59:33</td>
			<td><a href='https://youtu.be/7Fogx1vSL1M' target='_blank' class='outlink' rel='nofollow'>【#スバルーナ】ホロ鯖！！家漁り？！？7days
				to dieの9日目【初コラボ！】</a></td>


		</tr>
		<tr>
			<td>2020/04/07</td>
			<td>01:04:33</td>
			<td><a href='https://youtu.be/pMWRicklzbc' target='_blank' class='outlink' rel='nofollow'>【絶対に笑ってはいけない】大空スバル声真似すると全部大空スバル説【#大空スバル声真似】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/08</td>
			<td>01:53:00</td>
			<td><a href='https://youtu.be/VywfBzHi9NQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】スバルのデトロイト【最終回】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/10</td>
			<td>01:13:09</td>
			<td><a href='https://youtu.be/LkH-KiTYjRI' target='_blank' class='outlink' rel='nofollow'>【裏話】こんばんわ、スバル【雑談】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/11</td>
			<td>01:07:38</td>
			<td><a href='https://youtu.be/8nEGNV38_Ys' target='_blank' class='outlink' rel='nofollow'>【20万人まで】さざなみの音パーティー会場【耐久】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/11</td>
			<td>01:20:13</td>
			<td><a href='https://youtu.be/6hDxw4IlL7Y' target='_blank' class='outlink' rel='nofollow'>【初見実況】モンスターファームで100日後に勝つワニを作る【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/13</td>
			<td>01:20:21</td>
			<td><a href='https://youtu.be/Nx0Y3JAyzlQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】いきる○生きろッッッ！！最強モンスター作り2日目【モンスターファーム】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/14</td>
			<td>00:59:13</td>
			<td><a href='https://youtu.be/GNOO8gD8ydY' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】フブミオスバ‼みんなで大暴れの巻‼【7days
				to die】</a></td>


		</tr>
		<tr>
			<td>2020/04/15</td>
			<td>01:50:31</td>
			<td><a href='https://youtu.be/pNzK-HQX-Fw' target='_blank' class='outlink' rel='nofollow'>【初見実況】目指せC帯！！！最強モンスター作り3日目【モンスターファーム】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/15</td>
			<td>01:22:50</td>
			<td><a href='https://youtu.be/op8L5XiQY7I' target='_blank' class='outlink' rel='nofollow'>【7days to
				die】スバル視点！！！！新ホロ鯖リベンジ！！！1日目から【#ホロ7大豆】</a></td>


		</tr>
		<tr>
			<td>2020/04/18</td>
			<td>01:10:17</td>
			<td><a href='https://youtu.be/Nz6Kq75heyo' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/18</td>
			<td>04:21:17</td>
			<td><a href='https://youtu.be/W8M8C3i3GzY' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！たのしむぞ！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/18</td>
			<td>01:18:26</td>
			<td><a href='https://youtu.be/FXG8ZeXNwRs' target='_blank' class='outlink' rel='nofollow'>【VISAGE】最恐P.T風ホラゲー？？？？？？余裕【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/19</td>
			<td>01:09:49</td>
			<td><a href='https://youtu.be/BlY9JJoWdyc' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/19</td>
			<td>04:17:59</td>
			<td><a href='https://youtu.be/Ss0SKcEhifc' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！2日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/19</td>
			<td>01:10:36</td>
			<td><a href='https://youtu.be/ge4SAyvFBVU' target='_blank' class='outlink' rel='nofollow'>【地獄上級者向け】推しへの想いを叫べ！！！ポエム展覧会【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/20</td>
			<td>01:36:16</td>
			<td><a href='https://youtu.be/Py3n7WAF2Xk' target='_blank' class='outlink' rel='nofollow'>【初見実況】目指せB帯！！！最強モンスター作り4日目【モンスターファーム】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/21</td>
			<td>00:38:47</td>
			<td><a href='https://youtu.be/4u6BUnSMwBA' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！3日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/21</td>
			<td>02:12:19</td>
			<td><a href='https://youtu.be/ooNVaJ01xq8' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！3.5日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/22</td>
			<td>01:16:44</td>
			<td><a href='https://youtu.be/GSQ200Q-9wg' target='_blank' class='outlink' rel='nofollow'>【7days to
				die】スバル視点！！ついに拠点完成？！！5日目から！【#ホロ7大豆】</a></td>


		</tr>
		<tr>
			<td>2020/04/23</td>
			<td>01:33:00</td>
			<td><a href='https://youtu.be/1sJaUbVNbQI' target='_blank' class='outlink' rel='nofollow'>【初見実況】いよいよA帯！？！最強モンスター作り5日目【モンスターファーム】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/23</td>
			<td>02:16:19</td>
			<td><a href='https://youtu.be/-6uaNhsoYXc' target='_blank' class='outlink' rel='nofollow'>【これが】完全初見HITMAN
				【３Dの世界】</a></td>


		</tr>
		<tr>
			<td>2020/04/25</td>
			<td>01:15:02</td>
			<td><a href='https://youtu.be/URDy3hOMqgg' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/25</td>
			<td>06:07:17</td>
			<td><a href='https://youtu.be/gP85Zz-_NrA' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！4日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/26</td>
			<td>06:35:36</td>
			<td><a href='https://youtu.be/6IBnrzwiIk4' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！5日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/26</td>
			<td>00:58:59</td>
			<td><a href='https://youtu.be/jEBAbeynJWY' target='_blank' class='outlink' rel='nofollow'>【slither.io】鳥類をナメるな。【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/27</td>
			<td>02:19:27</td>
			<td><a href='https://youtu.be/M2M3ivOukNg' target='_blank' class='outlink' rel='nofollow'>【リベンジ】HITMAN【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/28</td>
			<td>02:10:04</td>
			<td><a href='https://youtu.be/wIpMnyOv-MM' target='_blank' class='outlink' rel='nofollow'>【7days to
				die】乗り越えろ７日目！！！！！！【#ホロ7大豆】</a></td>


		</tr>
		<tr>
			<td>2020/04/29</td>
			<td>04:14:02</td>
			<td><a href='https://youtu.be/q8J-v0O8FVE' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！6日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/04/30</td>
			<td>01:38:58</td>
			<td><a href='https://youtu.be/PG9Htrxb1i4' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】steam評価🌟10？！MadFatherする！！1日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/02</td>
			<td>01:01:56</td>
			<td><a href='https://youtu.be/0anrQaCrpXA' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/02</td>
			<td>01:28:22</td>
			<td><a href='https://youtu.be/gDYn2tFV_QU' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！7日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/02</td>
			<td>02:41:20</td>
			<td><a href='https://youtu.be/fXyk5_3YlU4' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！7.5日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/03</td>
			<td>04:19:21</td>
			<td><a href='https://youtu.be/VjUh5ZkJF3g' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！8日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/03</td>
			<td>01:30:47</td>
			<td><a href='https://youtu.be/Zehbe4zdQz8' target='_blank' class='outlink' rel='nofollow'>【DM雑談】推しをもつ者同士語らいあう会【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/04</td>
			<td>02:26:07</td>
			<td><a href='https://youtu.be/pyiRsZCvvUU' target='_blank' class='outlink' rel='nofollow'>【リベンジ】HITMAN【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/05</td>
			<td>01:21:26</td>
			<td><a href='https://youtu.be/rhIoSNoCI6c' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】steam評価🌟10？！MadFatherする！！2日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/06</td>
			<td>05:29:38</td>
			<td><a href='https://youtu.be/ugU9yta2zuo' target='_blank' class='outlink' rel='nofollow'>【FF6】初見実況！人生初FFシリーズ！9日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/06</td>
			<td>01:14:56</td>
			<td><a href='https://youtu.be/KgIJoWsxDFo' target='_blank' class='outlink' rel='nofollow'>【かかってこいよ】大喜利バトル延長戦【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/07</td>
			<td>01:40:39</td>
			<td><a href='https://youtu.be/vG94TMdI_4o' target='_blank' class='outlink' rel='nofollow'>【7days to
				die】耕せ畑！！！！暴れろ深夜のスーパー！！！！！【#ホロ7大豆】</a></td>


		</tr>
		<tr>
			<td>2020/05/09</td>
			<td>01:15:03</td>
			<td><a href='https://youtu.be/oji659QTTeU' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/09</td>
			<td>06:14:28</td>
			<td><a href='https://youtu.be/ePVv92ptihE' target='_blank' class='outlink' rel='nofollow'>【FF6】狂信者の塔攻略！！！初見実況FFシリーズ！10日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/10</td>
			<td>05:00:34</td>
			<td><a href='https://youtu.be/Z5wa9rbJvRk' target='_blank' class='outlink' rel='nofollow'>【FF6】八竜討伐！！ダンカン師匠・エボシ岩探し！！！人生初FFシリーズ！11日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/10</td>
			<td>01:09:18</td>
			<td><a href='https://youtu.be/5yj-K9ybHBQ' target='_blank' class='outlink' rel='nofollow'>【祝四周年】視聴者参加ソーセージレジェンド大会！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/12</td>
			<td>01:28:49</td>
			<td><a href='https://youtu.be/X2EJcwdw8j0' target='_blank' class='outlink' rel='nofollow'>【主役は】視聴者の中から「１人」を見つける企画【君かもしれない…】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/13</td>
			<td>01:57:02</td>
			<td><a href='https://youtu.be/9Xq1FGqczLw' target='_blank' class='outlink' rel='nofollow'>【脳筋卒業】因縁のパリからの脱出！！！！HITMAN【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/13</td>
			<td>01:10:40</td>
			<td><a href='https://youtu.be/zNgj07HR4Bw' target='_blank' class='outlink' rel='nofollow'>【DM雑談】ド田舎あるある語ろうぜ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/14</td>
			<td>01:41:47</td>
			<td><a href='https://youtu.be/RvHeQxU0WTQ' target='_blank' class='outlink' rel='nofollow'>【初課金と】スバルの知らないソシャゲの世界【その心得】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/16</td>
			<td>01:32:46</td>
			<td><a href='https://youtu.be/MtUFVU0eXCc' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/16</td>
			<td>05:25:54</td>
			<td><a href='https://youtu.be/RCH8tY2O-24' target='_blank' class='outlink' rel='nofollow'>【FF6最終回】最終ダンジョン攻略クリア！！！！人生初FFシリーズ！11日目【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/17</td>
			<td>04:23:34</td>
			<td><a href='https://youtu.be/AhBUH10655I' target='_blank' class='outlink' rel='nofollow'>【初見実況#1】ニーアオートマタ：NieR:Automata【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/19</td>
			<td>01:19:37</td>
			<td><a href='https://youtu.be/upE8D26bWBs' target='_blank' class='outlink' rel='nofollow'>【華麗な暗殺術】HITMAN！！リゾートヒマパンで大暴れの巻！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/20</td>
			<td>02:18:03</td>
			<td><a href='https://youtu.be/OmscV_eTkLo' target='_blank' class='outlink' rel='nofollow'>【初見実況#2】ニーアオートマタ：NieR:Automata【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/21</td>
			<td>00:58:02</td>
			<td><a href='https://youtu.be/S_xjCXXHNE8' target='_blank' class='outlink' rel='nofollow'>【】うた【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/21</td>
			<td>01:22:26</td>
			<td><a href='https://youtu.be/Ca5-SVJ9Gl0' target='_blank' class='outlink' rel='nofollow'>【DM雑談】キミの！推しグッズ祭壇がみたいっ！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/22</td>
			<td>04:05:45</td>
			<td><a href='https://youtu.be/7WZUqtnSahw' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】steam評価🌟10？！MadFatherする！！最終回【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/23</td>
			<td>02:28:52</td>
			<td><a href='https://youtu.be/5wF35aQipDA' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/23</td>
			<td>06:40:24</td>
			<td><a href='https://youtu.be/bv18ednRKsk' target='_blank' class='outlink' rel='nofollow'>【初見実況#3】ニーアオートマタ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/24</td>
			<td>04:32:30</td>
			<td><a href='https://youtu.be/wDw_Jh7COUM' target='_blank' class='outlink' rel='nofollow'>【初見実況#４】2ルート目！！ニーアオートマタ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/26</td>
			<td>02:23:38</td>
			<td><a href='https://youtu.be/TIZdmxKxLJQ' target='_blank' class='outlink' rel='nofollow'>【学園ハンサム】笑ったら即終了？！迷(名)作ゲームシリーズ【早乙女拓也ルート】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/27</td>
			<td>03:07:44</td>
			<td><a href='https://youtu.be/CilmeyFFZVg' target='_blank' class='outlink' rel='nofollow'>【初見実況#5】2ルート目！！ニーアオートマタ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/28</td>
			<td>02:15:16</td>
			<td><a href='https://youtu.be/Z1q_jWnyXbo' target='_blank' class='outlink' rel='nofollow'>【華麗な暗殺術】HITMAN！！コロラドでも大爆発の巻！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/28</td>
			<td>01:19:20</td>
			<td><a href='https://youtu.be/NDqEsMNtIFU' target='_blank' class='outlink' rel='nofollow'>【DM雑談】ひとり暮らしあるある語ろうぜ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/29</td>
			<td>01:30:36</td>
			<td><a href='https://youtu.be/ZA9oWIvPWd0' target='_blank' class='outlink' rel='nofollow'>【怖くないよ】陽キャ救済？！四期生と仲良くなろう大作戦！！！【スバルだよ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/30</td>
			<td>01:24:58</td>
			<td><a href='https://youtu.be/53orDvvoB8k' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/30</td>
			<td>06:42:47</td>
			<td><a href='https://youtu.be/_9wjzXgUNZg' target='_blank' class='outlink' rel='nofollow'>【初見実況#6】2ルート目！！ニーアオートマタ：NieR:Automata【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/05/31</td>
			<td>09:55:02</td>
			<td><a href='https://youtu.be/ThtcrBgB4KY' target='_blank' class='outlink' rel='nofollow'>【初見実況#7】3ルート目！！ニーアオートマタ：NieR:Automata【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/02</td>
			<td>01:56:44</td>
			<td><a href='https://youtu.be/ciJdX69Yz3M' target='_blank' class='outlink' rel='nofollow'>【学園ハンサム】笑ったら即終了？！迷(名)作ゲームシリーズ【鏡蓮児ルート】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/03</td>
			<td>01:28:28</td>
			<td><a href='https://youtu.be/cU3-w6Mlbu4' target='_blank' class='outlink' rel='nofollow'>【DM雑談】あなたの推し布教の仕方教えてください！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/04</td>
			<td>01:16:50</td>
			<td><a href='https://youtu.be/p7MHDoDgNJE' target='_blank' class='outlink' rel='nofollow'>【初体験レポ】他称陽キャが人生初ソロでアニメイトに行った結果【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/05</td>
			<td>01:29:30</td>
			<td><a href='https://youtu.be/Teyrh2YgkMc' target='_blank' class='outlink' rel='nofollow'>【これが】ホロライブVtuberのリアルな1日レポート！？大空スバルの場合【リアルだ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/06</td>
			<td>01:43:52</td>
			<td><a href='https://youtu.be/bmwV1JGEGMU' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】06/06
				おはようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/07</td>
			<td>01:48:42</td>
			<td><a href='https://youtu.be/HNkd9KYdORo' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】06/07
				スバルの陽キャの歴史のぞいてく？？【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/09</td>
			<td>01:11:48</td>
			<td><a href='https://youtu.be/3cO6p2413f0' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】IQ５憶のスバルと学力バトルッス！！！！【クイズバトルオンライン】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/10</td>
			<td>01:15:58</td>
			<td><a href='https://youtu.be/ksrSUoMrQBg' target='_blank' class='outlink' rel='nofollow'>【雑談】家族のおもしろエピソード雑談！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/11</td>
			<td>01:10:56</td>
			<td><a href='https://youtu.be/wXxrf7NOzmA' target='_blank' class='outlink' rel='nofollow'>【 #ホロワードウルフ
				】ワードウルフホロライブ！！！！！！【勝！！！！！】</a></td>


		</tr>
		<tr>
			<td>2020/06/12</td>
			<td>01:03:10</td>
			<td><a href='https://youtu.be/zs47h3uXbYg' target='_blank' class='outlink' rel='nofollow'>【 #100均ホロライブ
				】メンバーの私物を見抜け！！！！100均ホロライブ！！！【yhea!!】</a></td>


		</tr>
		<tr>
			<td>2020/06/13</td>
			<td>01:53:14</td>
			<td><a href='https://youtu.be/Qa6NQVmTPt0' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】06/13
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/13</td>
			<td>01:28:30</td>
			<td><a href='https://youtu.be/kVnUHnz8mcc' target='_blank' class='outlink' rel='nofollow'>【 #WWhololive
				】ワールドワイドホロライブ！！国際交流するッス！！！【日本語放送】</a></td>


		</tr>
		<tr>
			<td>2020/06/14</td>
			<td>01:25:10</td>
			<td><a href='https://youtu.be/3w2zCBc304M' target='_blank' class='outlink' rel='nofollow'>【やるぞ】第5回ソーセージレジェンド大会大空スバル杯【神ゲー】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/18</td>
			<td>01:36:52</td>
			<td><a href='https://youtu.be/m_7wMJfMKiQ' target='_blank' class='outlink' rel='nofollow'>【雑談】スバルの１番の闇期、小学校時代のぞいてく？？？？【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/19</td>
			<td>01:24:00</td>
			<td><a href='https://youtu.be/DK_JVq6qXTk' target='_blank' class='outlink' rel='nofollow'>【Citiies
				Skyline】スバル市長！！ホロライブシティ作るッス！！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/20</td>
			<td>01:53:32</td>
			<td><a href='https://youtu.be/BNNUSaKxQZc' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】06/20
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/20</td>
			<td>01:11:58</td>
			<td><a href='https://youtu.be/xxBVoLB6eMA' target='_blank' class='outlink' rel='nofollow'>【 #ホロライブFAMS
				】嘘を真実に変えろ！エイプリルフールゲーム【嘘つき人狼】</a></td>


		</tr>
		<tr>
			<td>2020/06/21</td>
			<td>03:30:12</td>
			<td><a href='https://youtu.be/AdyTUvrpMuk' target='_blank' class='outlink' rel='nofollow'>【初見実況】アサシンクリード4！！！やる！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/23</td>
			<td>00:58:32</td>
			<td><a href='https://youtu.be/56e4tcsyHlI' target='_blank' class='outlink' rel='nofollow'>【アｱｱｱｱｱｱｱｱｱｱ】うたう【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/24</td>
			<td>02:34:16</td>
			<td><a href='https://youtu.be/QvaYA-6BvJw' target='_blank' class='outlink' rel='nofollow'>【初見実況#２】アサシンクリード4！！！やる！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/25</td>
			<td>01:22:16</td>
			<td><a href='https://youtu.be/apnpllIWDsE' target='_blank' class='outlink' rel='nofollow'>【DM雑談】俺の！私の！！おすすめオタ活！！～日常に推しを添えて～【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/26</td>
			<td>00:03:18</td>
			<td><a href='https://youtu.be/t-Y-UnC2HQo' target='_blank' class='outlink'
						 rel='nofollow'>【うたみた】恋の魔法【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/27</td>
			<td>01:17:32</td>
			<td><a href='https://youtu.be/Z3sPjFphtAk' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】06/27
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/06/27</td>
			<td>01:13:22</td>
			<td><a href='https://youtu.be/n5gjfie8sQY' target='_blank' class='outlink' rel='nofollow'>【俺の話を 】#ホロライバーの主張
				【聞け】</a></td>


		</tr>
		<tr>
			<td>2020/06/28</td>
			<td>03:29:44</td>
			<td><a href='https://youtu.be/HpmNOPEWFCI' target='_blank' class='outlink' rel='nofollow'>【初見実況#３】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/28</td>
			<td>01:25:50</td>
			<td><a href='https://youtu.be/yU1l7Ek9eZk' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】第二回！IQ５憶のスバルと学力バトルッス！！！！【クイズバトルオンライン】</a>
			</td>


		</tr>
		<tr>
			<td>2020/06/30</td>
			<td>01:29:06</td>
			<td><a href='https://youtu.be/X6uHxzwMTnU' target='_blank' class='outlink' rel='nofollow'>【Citiies
				Skyline】スバル市長！！関所で経済を立て直すッス！！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/01</td>
			<td>02:28:32</td>
			<td><a href='https://youtu.be/ljPIJJ9Y09U' target='_blank' class='outlink' rel='nofollow'>【おはなし】生誕祭前の雑談&amp;振り返り放送【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/02</td>
			<td>01:05:14</td>
			<td><a href='https://youtu.be/ODT0DOpfU-0' target='_blank' class='outlink' rel='nofollow'>【 #大空スバル誕生日
				】第一回大空スバル印象調査会【17.2さい！】</a></td>


		</tr>
		<tr>
			<td>2020/07/04</td>
			<td>01:51:14</td>
			<td><a href='https://youtu.be/DQETgdpr3Jo' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】07/04
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/04</td>
			<td>01:03:09</td>
			<td><a href='https://youtu.be/t1D3O5RC_vc' target='_blank' class='outlink' rel='nofollow'>【 #大空家ユメグラ
				】大空家といく！ユメノグラフィア DAY２～大空スバル編～【地獄】</a></td>


		</tr>
		<tr>
			<td>2020/07/05</td>
			<td>02:54:17</td>
			<td><a href='https://youtu.be/4yVUd5HOujM' target='_blank' class='outlink' rel='nofollow'>【初見実況#４】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/05</td>
			<td>02:01:16</td>
			<td><a href='https://youtu.be/LsfdQaQk-C0' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】初心者です優しくしてくださいARK【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/07</td>
			<td>01:30:02</td>
			<td><a href='https://youtu.be/_HIdx0oZBnA' target='_blank' class='outlink' rel='nofollow'>【Cities
				Skyline】スバル市長！！街にできたよ「罪と罰」！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/02</td>
			<td>01:13:36</td>
			<td><a href='https://youtu.be/ZG86bIdRGrQ' target='_blank' class='outlink' rel='nofollow'>【たのじみ！！】プレゼントをあける会【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/09</td>
			<td>01:51:10</td>
			<td><a href='https://youtu.be/xoM3nc6wP_Y' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】ホロ鯖ARK！！！かかってこいや亀！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/10</td>
			<td>01:30:25</td>
			<td><a href='https://youtu.be/fwoCE-VJcq4' target='_blank' class='outlink' rel='nofollow'>【雑談】超高速ましゅまろぱくぱく【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/11</td>
			<td>01:40:06</td>
			<td><a href='https://youtu.be/ALccXArqFgw' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】07/11
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/11</td>
			<td>02:51:22</td>
			<td><a href='https://youtu.be/3bOlvSFrLnQ' target='_blank' class='outlink' rel='nofollow'>【初見実況#５】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/12</td>
			<td>02:11:06</td>
			<td><a href='https://youtu.be/Om7gt-53kls' target='_blank' class='outlink' rel='nofollow'>【初見実況#６】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/12</td>
			<td>00:57:38</td>
			<td><a href='https://youtu.be/Lk47ccdfZ34' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】🥺🥺🥺🥺PI🥺🥺🥺🥺E🥺🥺🥺🥺N🥺🥺🥺🥺【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/14</td>
			<td>01:39:34</td>
			<td><a href='https://youtu.be/-UxagU_fWOg' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】ホロ鯖ARK！！！空を舞うミオスバ！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/15</td>
			<td>01:27:14</td>
			<td><a href='https://youtu.be/3bbRdHvB43A' target='_blank' class='outlink' rel='nofollow'>【Cities
				Skyline】スバル市長！！街につくるよ「羅生門」！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/16</td>
			<td>01:30:50</td>
			<td><a href='https://youtu.be/c9LR0w0A2M8' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】橋建築の為の！！！！！！ソロトリケラトプステイム！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/17</td>
			<td>00:56:58</td>
			<td><a href='https://youtu.be/2Nckiit-KL8' target='_blank' class='outlink' rel='nofollow'>【神ゲー】第六回ソセレ大会！！！！！まとめてかかってこいや！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/18</td>
			<td>01:39:08</td>
			<td><a href='https://youtu.be/jzO5fGXCboQ' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】07/17
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/18</td>
			<td>02:28:10</td>
			<td><a href='https://youtu.be/eDNZ5vb9CwU' target='_blank' class='outlink' rel='nofollow'>【初見実況#７】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/19</td>
			<td>05:13:10</td>
			<td><a href='https://youtu.be/aeE04GlIHFg' target='_blank' class='outlink' rel='nofollow'>【初見実況#最終回】アサシンクリード4！！！やる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/22</td>
			<td>01:45:50</td>
			<td><a href='https://youtu.be/nObC4TiZV2A' target='_blank' class='outlink' rel='nofollow'>【DM雑談】テーマ：推しに対してテンション上がりまくった話【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/23</td>
			<td>02:23:40</td>
			<td><a href='https://youtu.be/RJz-6qEHTPU' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】湾岸橋建築する！！原油も探す！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/24</td>
			<td>01:31:30</td>
			<td><a href='https://youtu.be/0U5yFRYj1dE' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】だーくでぃせぷしょんすばる【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/25</td>
			<td>01:51:20</td>
			<td><a href='https://youtu.be/1OrAf8Be59I' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】07/25
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/07/25</td>
			<td>01:02:46</td>
			<td><a href='https://youtu.be/si58qqiUy-4' target='_blank' class='outlink' rel='nofollow'>【#IOSB】イオフィ先生のお絵描き教室【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/27</td>
			<td>01:15:02</td>
			<td><a href='https://youtu.be/u6eskcH_XWA' target='_blank' class='outlink' rel='nofollow'>【Slither.io】みみずすばる【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/29</td>
			<td>01:33:58</td>
			<td><a href='https://youtu.be/Hl2Z74Nrijg' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】目指せ初のカワウソテイム！！！！！！！【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/30</td>
			<td>01:57:32</td>
			<td><a href='https://youtu.be/cvBYDNkElPE' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】都市伝説を暴くすばる！！！！！！！！！【流行り神警視庁怪異事件ファイル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/07/31</td>
			<td>01:55:04</td>
			<td><a href='https://youtu.be/1enadukImzU' target='_blank' class='outlink' rel='nofollow'>【Half-Life2】ガバエイムでもエイリアンに勝ちたいすばる！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/01</td>
			<td>01:45:40</td>
			<td><a href='https://youtu.be/fxa-s5M9u1c' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】8/1
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/01</td>
			<td>04:40:26</td>
			<td><a href='https://youtu.be/qV2FQ0NbwA0' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】都市伝説を暴くすばる！！！「コックリさん」編【流行り神警視庁怪異事件ファイル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/01</td>
			<td>01:20:24</td>
			<td><a href='https://youtu.be/oqyaM6YGcG8' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】毛皮装備がほしいすばる！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/02</td>
			<td>06:01:54</td>
			<td><a href='https://youtu.be/TxN_7Uyr6Bc' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】都市伝説を暴くすばる！！！！！「鬼」編！！！！【流行り神警視庁怪異事件ファイル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/03</td>
			<td>01:46:40</td>
			<td><a href='https://youtu.be/m3vzhh7lNiI' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】だーくでぃせぷしょんすばる　STAGE3【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/04</td>
			<td>01:09:00</td>
			<td><a href='https://youtu.be/hLepFFILEQI' target='_blank' class='outlink' rel='nofollow'>【#スバルーナ】遊び大全コラボ【ス虐の時代終了！！！】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/06</td>
			<td>01:03:02</td>
			<td><a href='https://youtu.be/FKFsPlZWl4s' target='_blank' class='outlink' rel='nofollow'>【#100均ホロライブ】メンバーの私物を見抜け！！！！100均ホロライブ！！！【第二弾】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/08</td>
			<td>01:54:40</td>
			<td><a href='https://youtu.be/qUGFieucenY' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】8/8
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/09</td>
			<td>00:59:40</td>
			<td><a href='https://youtu.be/urRlD3Ahpfc' target='_blank' class='outlink' rel='nofollow'>【 #ホロワードウルフ
				】ホロライブワードウルフ！！！【やる！！！】</a></td>


		</tr>
		<tr>
			<td>2020/08/10</td>
			<td>04:21:22</td>
			<td><a href='https://youtu.be/Jiak2fgPtFY' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】都市伝説を暴くすばる！！！！！最終話！！！！【流行り神警視庁怪異事件ファイル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/10</td>
			<td>01:44:14</td>
			<td><a href='https://youtu.be/LdCaj6upIkw' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】アキ先輩と恐竜戦闘訓練する！！！！！！！【ホロライブ/大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/12</td>
			<td>01:49:34</td>
			<td><a href='https://youtu.be/Nqjuz5KW42M' target='_blank' class='outlink' rel='nofollow'>【Dark
				Deception】庭師を今日こそクリアするすばる【地獄の3面】</a></td>


		</tr>
		<tr>
			<td>2020/08/13</td>
			<td>01:52:40</td>
			<td><a href='https://youtu.be/oL2roCXTwIQ' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】モンボ作り1日目！！セメント収集の巻！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/14</td>
			<td>01:33:08</td>
			<td><a href='https://youtu.be/S1xpYQolEcw' target='_blank' class='outlink' rel='nofollow'>【かかってこいや】fall guys
				すばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/15</td>
			<td>02:00:02</td>
			<td><a href='https://youtu.be/86cmQAjOAcI' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】8/15
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/15</td>
			<td>01:43:42</td>
			<td><a href='https://youtu.be/gxTEEv_iY6w' target='_blank' class='outlink' rel='nofollow'>【初見実況】ピクミンすばる【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/16</td>
			<td>02:55:46</td>
			<td><a href='https://youtu.be/U_jXcPc0wnY' target='_blank' class='outlink' rel='nofollow'>【初見実況】ピクミンすばる２【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/19</td>
			<td>01:55:04</td>
			<td><a href='https://youtu.be/m8UYEgrDaJw' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】モンボ作り2日目！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/20</td>
			<td>01:51:48</td>
			<td><a href='https://youtu.be/DGNFcG2ay3Y' target='_blank' class='outlink' rel='nofollow'>【初見実況】ピクミンすばる３【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/20</td>
			<td>01:40:38</td>
			<td><a href='https://youtu.be/gWzzJhYEhz8' target='_blank' class='outlink' rel='nofollow'>【かかってこいや】1位取れない鳥はただの🦆！fall
				guys すばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/21</td>
			<td>01:38:02</td>
			<td><a href='https://youtu.be/eGulJ9Qouao' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】おやすみスバル（仮）【投稿は概要欄から！】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/22</td>
			<td>01:59:06</td>
			<td><a href='https://youtu.be/G_i0mD3l0r4' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】8/21
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/23</td>
			<td>04:14:18</td>
			<td><a href='https://youtu.be/gp6lG3zaBis' target='_blank' class='outlink' rel='nofollow'>【初見実況】ピクミンすばる４【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/23</td>
			<td>01:38:28</td>
			<td><a href='https://youtu.be/5SZfqFFt8lY' target='_blank' class='outlink'
						 rel='nofollow'>【うた】DEATH【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/27</td>
			<td>01:31:28</td>
			<td><a href='https://youtu.be/zxnb5ua2Q1I' target='_blank' class='outlink' rel='nofollow'>【雑談】1人暮らしってYABEEEEEEEEEEEEEEEEEEEEEE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/28</td>
			<td>01:33:28</td>
			<td><a href='https://youtu.be/BRnvHFwJc7E' target='_blank' class='outlink' rel='nofollow'>【恐怖！】本当にあった怖い黒歴史2020【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/29</td>
			<td>02:07:40</td>
			<td><a href='https://youtu.be/SkFXpefqqtg' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】8/29
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/08/29</td>
			<td>01:34:04</td>
			<td><a href='https://youtu.be/kvXLvllXero' target='_blank' class='outlink' rel='nofollow'>【初見実況】スーパーマリオサンシャイン☼スバル１【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/08/30</td>
			<td>01:27:54</td>
			<td><a href='https://youtu.be/BqfNwHhOFMk' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】あやスバホロ鯖新拠点探しマイクラ【復興】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/01</td>
			<td>01:53:54</td>
			<td><a href='https://youtu.be/9B5hPscY_uE' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】レベリング！！いくぞ初レッドウッド！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/02</td>
			<td>01:36:02</td>
			<td><a href='https://youtu.be/Hr550c2DcrQ' target='_blank' class='outlink' rel='nofollow'>【Dark
				Deception】アヒルステージを30分で攻略しピエロとタイマンはるすばる！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/03</td>
			<td>02:53:08</td>
			<td><a href='https://youtu.be/Gi8PlCytuWQ' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】マイクラ建築るすばる【復興】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/03</td>
			<td>01:35:20</td>
			<td><a href='https://youtu.be/zrkgOjhFn9Q' target='_blank' class='outlink' rel='nofollow'>【かかってこいや】1位をとるすばる【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/04</td>
			<td>00:56:54</td>
			<td><a href='https://youtu.be/k9YpEb-yOb8' target='_blank' class='outlink' rel='nofollow'>【圧倒的強さ】マリオカート8DX！！すーぱー稲妻すばる杯マリカ！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/05</td>
			<td>02:34:44</td>
			<td><a href='https://youtu.be/_6vPWBswiqQ' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】9/04
				おあようスバル【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/05</td>
			<td>02:34:16</td>
			<td><a href='https://youtu.be/ZupcIawbO-Q' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】ティタノ準備【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/05</td>
			<td>04:55:16</td>
			<td><a href='https://youtu.be/qvfXxbkNa9Y' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖ARK】ティタノテイム！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/08</td>
			<td>01:59:12</td>
			<td><a href='https://youtu.be/C6WTR7KpbpI' target='_blank' class='outlink' rel='nofollow'>【ホラゲー？】INSIDE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/09</td>
			<td>02:53:02</td>
			<td><a href='https://youtu.be/aJKpWSKdv3A' target='_blank' class='outlink'
						 rel='nofollow'>【最終回】INSIDE【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/10</td>
			<td>03:04:36</td>
			<td><a href='https://youtu.be/zK5IGA4e7mc' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】マイクラ建築るすばる2【復興】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/12</td>
			<td>01:10:00</td>
			<td><a href='https://youtu.be/92pRbco8wdM' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】9/12 おあようスバル
				with ちょこ先生【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/13</td>
			<td>03:23:24</td>
			<td><a href='https://youtu.be/5H-8jvKZOLA' target='_blank' class='outlink' rel='nofollow'>【】はなす【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/14</td>
			<td>02:07:28</td>
			<td><a href='https://youtu.be/XEj2gQcchGo' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】すばるのマイクラすーぱーつよつよ大作戦！！！その１！！！【復興】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/16</td>
			<td>00:49:24</td>
			<td><a href='https://youtu.be/mDAcd8I-xgw' target='_blank' class='outlink'
						 rel='nofollow'>【#大空スバル２周年】はなす【持つべきものは友】</a></td>


		</tr>
		<tr>
			<td>2020/09/18</td>
			<td>01:39:38</td>
			<td><a href='https://youtu.be/m6PwPaV8WXI' target='_blank' class='outlink' rel='nofollow'>【ホロ鯖】すばるのマイクラすーぱーつよつよ大作戦！！！その2！！！【復興】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/20</td>
			<td>02:43:52</td>
			<td><a href='https://youtu.be/7IXAobPoevw' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】9/19 おあようスバル
				【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/20</td>
			<td>03:53:36</td>
			<td><a href='https://youtu.be/PQuPPOgpmJI' target='_blank' class='outlink' rel='nofollow'>【初見実況】ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/21</td>
			<td>03:40:10</td>
			<td><a href='https://youtu.be/6ckYPirMSsI' target='_blank' class='outlink' rel='nofollow'>【初見実況】#２ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/22</td>
			<td>01:48:46</td>
			<td><a href='https://youtu.be/vlugkj33H5g' target='_blank' class='outlink' rel='nofollow'>【MINECRAFT】ゆる雑談！ダイヤなどをまったりあつめるすばる【ホロラブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/09/23</td>
			<td>01:57:44</td>
			<td><a href='https://youtu.be/n731qqx3Cgw' target='_blank' class='outlink' rel='nofollow'>【 #生スバル
				】ふぉーるがいずすばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/24</td>
			<td>02:29:48</td>
			<td><a href='https://youtu.be/KmcAK3fLZAE' target='_blank' class='outlink' rel='nofollow'>【 #生スバル
				】トラップを作ってしゅばしゅばしたいすばる【MINECRAFT】</a></td>


		</tr>
		<tr>
			<td>2020/09/26</td>
			<td>02:32:50</td>
			<td><a href='https://youtu.be/-N8WvjpU20Q' target='_blank' class='outlink' rel='nofollow'>【まったり雑談】9/26 おあようスバル
				【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/26</td>
			<td>03:18:24</td>
			<td><a href='https://youtu.be/zOBhKOFl-5Y' target='_blank' class='outlink' rel='nofollow'>【初見実況】#3
				ゼルダの伝説・風のタクトやる！！ヤバい森にいく！！！The Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/27</td>
			<td>01:33:08</td>
			<td><a href='https://youtu.be/aWB-jC_b-Ag' target='_blank' class='outlink' rel='nofollow'>【 #生スバル
				】TNTを作ってしゅばしゅばしたいすばる【MINECRAFT】</a></td>


		</tr>
		<tr>
			<td>2020/09/27</td>
			<td>00:46:00</td>
			<td><a href='https://youtu.be/-yquNvFEy54' target='_blank' class='outlink' rel='nofollow'>【初見実況】#4
				ゼルダの伝説・風のタクトやる！ジャブー様探し！！！！The Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/27</td>
			<td>02:30:58</td>
			<td><a href='https://youtu.be/NZFhRWoq_Yc' target='_blank' class='outlink' rel='nofollow'>【初見実況】#4.5　ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/28</td>
			<td>02:16:32</td>
			<td><a href='https://youtu.be/gKHM5r2EWAE' target='_blank' class='outlink' rel='nofollow'>【 #生スバル
				】第１回はじめてのポーション作りでしゅばしゅばすばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/09/29</td>
			<td>01:30:46</td>
			<td><a href='https://youtu.be/qCFjIIdEMrU' target='_blank' class='outlink'
						 rel='nofollow'>【#生スバル】おうた【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/01</td>
			<td>01:00:54</td>
			<td><a href='https://youtu.be/2k0tu4a7mPU' target='_blank' class='outlink' rel='nofollow'>【Chapter３】Dark Diception
				ピエルステージ攻略すばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/02</td>
			<td>01:37:28</td>
			<td><a href='https://youtu.be/OtkXf-ktPew' target='_blank' class='outlink' rel='nofollow'>【Chapter３】Dark Deception
				ピエルステージRTA!!リベンジすばる【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/03</td>
			<td>03:04:18</td>
			<td><a href='https://youtu.be/sofYlrHvWdQ' target='_blank' class='outlink' rel='nofollow'>【週末雑談】10/03 おあようスバル
				【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/04</td>
			<td>03:59:06</td>
			<td><a href='https://youtu.be/MuLAU7p6Se4' target='_blank' class='outlink' rel='nofollow'>【初見実況】#5　ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/04</td>
			<td>01:53:22</td>
			<td><a href='https://youtu.be/rfn7z8BOYn4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】RFA!!!最強負荷30で地獄をのぞいてみるすばる【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/06</td>
			<td>02:09:30</td>
			<td><a href='https://youtu.be/iOHLC-WKUk0' target='_blank' class='outlink' rel='nofollow'>【 #生スバル
				】2期生コラボたのしかったね雑談【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/08</td>
			<td>01:53:35</td>
			<td><a href='https://youtu.be/zoKEvUhVca0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】大空建設の本拠地をつくるぞ！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/09</td>
			<td>03:31:06</td>
			<td><a href='https://youtu.be/ZkPTEZKkz3E' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】INFLICTIONこわそう【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/10</td>
			<td>01:43:17</td>
			<td><a href='https://youtu.be/8n8O6R7skxY' target='_blank' class='outlink' rel='nofollow'>【週末雑談】10/10 おそようスバル
				【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/11</td>
			<td>03:39:18</td>
			<td><a href='https://youtu.be/czdJAMqyABQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】#6　ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/13</td>
			<td>00:05:10</td>
			<td><a href='https://youtu.be/haIPZgRCMSQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】しゅばしゅばしゅばしゅば！！！！！！！マイクラ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/13</td>
			<td>02:11:52</td>
			<td><a href='https://youtu.be/-cSmli64VK8' target='_blank' class='outlink' rel='nofollow'>【#生スバル】大空建設の本拠地をつくるぞ！！パート２！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/15</td>
			<td>00:52:16</td>
			<td><a href='https://youtu.be/oiyvXoh9gXs' target='_blank' class='outlink' rel='nofollow'>【くじびき】スバちょこルーナ地獄くじ引き大会こらぼ【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/17</td>
			<td>03:10:12</td>
			<td><a href='https://youtu.be/4-PfeuZjlm0' target='_blank' class='outlink' rel='nofollow'>【週末雑談】10/16 おそようスバル
				【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/20</td>
			<td>02:40:36</td>
			<td><a href='https://youtu.be/Nce15Hihpog' target='_blank' class='outlink' rel='nofollow'>【おはなし】いろいろ振り返り雑談【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/21</td>
			<td>01:25:08</td>
			<td><a href='https://youtu.be/_Od94_41hXQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】リベンジリベンジ！！！パート3！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/22</td>
			<td>01:33:30</td>
			<td><a href='https://youtu.be/kVRn7CH5JqU' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】初心者AMONG
				US！！！！！UBARU！！！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/23</td>
			<td>00:05:35</td>
			<td><a href='https://youtu.be/ZpsN-jbGi1E' target='_blank' class='outlink' rel='nofollow'>【発狂】マリメ２あんま分らんけどホロメンのコースくらい余裕余裕【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/23</td>
			<td>01:43:54</td>
			<td><a href='https://youtu.be/xP_uAeVFWoQ' target='_blank' class='outlink' rel='nofollow'>【発狂】マリメ２あんま分らんけどホロメンのコースくらい余裕余裕【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/25</td>
			<td>04:52:33</td>
			<td><a href='https://youtu.be/lDeDiXW4voE' target='_blank' class='outlink' rel='nofollow'>【初見実況】#7　最難関？！風の神殿攻略！！ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/10/27</td>
			<td>01:51:48</td>
			<td><a href='https://youtu.be/Bi-BcuyEHNA' target='_blank' class='outlink' rel='nofollow'>【#雑ホロAmongUs】宇 宙 人 狼 開 催
				!!【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2020/10/28</td>
			<td>01:56:12</td>
			<td><a href='https://youtu.be/w0S3hO3TP0A' target='_blank' class='outlink' rel='nofollow'>【大空建設】今度こそやってやるちゅば！！！！！！！！！！！！！！！！【大空スバル/ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/29</td>
			<td>03:45:22</td>
			<td><a href='https://youtu.be/7cI1pXkCQMI' target='_blank' class='outlink' rel='nofollow'>【大空建設】今度こそやってやるちゅば！！！！！！パート２！！！！！！！！！！【大空スバル/ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/29</td>
			<td>01:01:12</td>
			<td><a href='https://youtu.be/WpdfPInCT0E' target='_blank' class='outlink' rel='nofollow'>【地獄再び】スバちょこルーナ地獄くじ引き大会こらぼ【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/30</td>
			<td>01:43:56</td>
			<td><a href='https://youtu.be/yoVDYMcXbOI' target='_blank' class='outlink' rel='nofollow'>【】おうた【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/10/31</td>
			<td>01:41:28</td>
			<td><a href='https://youtu.be/P-yiBSu0Xqc' target='_blank' class='outlink' rel='nofollow'>【週末雑談】10/31
				おそようスバル　はっぴーはろうぃん！ 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/01</td>
			<td>03:31:28</td>
			<td><a href='https://youtu.be/bKw5YpARzk8' target='_blank' class='outlink' rel='nofollow'>【初見実況】#8　激ヤバ！！タライとホース集め！ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/03</td>
			<td>05:22:39</td>
			<td><a href='https://youtu.be/kUevy1wQUZQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】#9　チンクルに負けるな！タライとホース集め！ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/03</td>
			<td>01:27:14</td>
			<td><a href='https://youtu.be/-hsbE0066jU' target='_blank' class='outlink' rel='nofollow'>【Phasmophobia】心霊調査ELITE部隊/大空スバル視点【#ホロライブFAMS】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/04</td>
			<td>01:56:35</td>
			<td><a href='https://youtu.be/D6dGUmIAgzw' target='_blank' class='outlink' rel='nofollow'>【#ポンホロAmongUs】ポン ホロ 人 狼
				開 催 !!【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2020/11/04</td>
			<td>04:37:24</td>
			<td><a href='https://youtu.be/QFrn35kL5Q8' target='_blank' class='outlink' rel='nofollow'>【50万人記念】高速ましゅまろQ&amp;A大会！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/07</td>
			<td>01:09:42</td>
			<td><a href='https://youtu.be/IMy0NOlwXfQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル特別版？！バージョン2.0大発表～～～！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/07</td>
			<td>04:11:12</td>
			<td><a href='https://youtu.be/wo8G_bUR1XQ' target='_blank' class='outlink' rel='nofollow'>【初見実況】#10　最終回！！ゼルダの伝説・風のタクトやる！！！！The
				Legend of Zelda: The Wind Waker【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/08</td>
			<td>04:40:48</td>
			<td><a href='https://youtu.be/ItspEsuPNzA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバ温泉のランドマークタワ脚編しゅば！！！MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/09</td>
			<td>02:25:02</td>
			<td><a href='https://youtu.be/tzuC7QIxzkw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】paper.Please
				でお仕事するしゅば～～【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/10</td>
			<td>03:56:26</td>
			<td><a href='https://youtu.be/sUMSFgNs_HM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバ温泉のランドマークタワー建築するしゅば！！！MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/14</td>
			<td>01:31:06</td>
			<td><a href='https://youtu.be/AQxZ_7uRMXA' target='_blank' class='outlink' rel='nofollow'>【週末雑談】11/14
				おはようスバル　【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/14</td>
			<td>05:04:46</td>
			<td><a href='https://youtu.be/J5K50nujEnk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバ温泉のランドマークタワー完成させるしゅば！！！MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/14</td>
			<td>03:26:25</td>
			<td><a href='https://youtu.be/CpY7BmxU1G0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】最終回！！！！スバ温泉のランドマークタワー完成させるしゅば！！！MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/15</td>
			<td>03:37:36</td>
			<td><a href='https://youtu.be/rOraWNXUl-Y' target='_blank' class='outlink' rel='nofollow'>【#１】ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/15</td>
			<td>01:32:40</td>
			<td><a href='https://youtu.be/xVLPBn6NBPI' target='_blank' class='outlink' rel='nofollow'>【#宇宙ホロ人狼】AMONG US
				でやるしゅばなあああああ！！！【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2020/11/17</td>
			<td>01:48:36</td>
			<td><a href='https://youtu.be/PJEQw_pnqeA' target='_blank' class='outlink' rel='nofollow'>【#ホロ幽霊調査隊】幽霊なんて余裕しゅば～～～～～～！！！：Phasmophobia【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/19</td>
			<td>01:43:00</td>
			<td><a href='https://youtu.be/eNrCZaI5OIA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】第七回ソーセージレジェンド大会：SAUSAGE
				LEGEND【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/21</td>
			<td>01:01:06</td>
			<td><a href='https://youtu.be/-o9zZ_32nUk' target='_blank' class='outlink' rel='nofollow'>【週末雑談】11/21
				うんどうかいたのしかったねスバル　【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/22</td>
			<td>03:39:22</td>
			<td><a href='https://youtu.be/RbVC7zXyZpw' target='_blank' class='outlink' rel='nofollow'>【#２】ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/22</td>
			<td>01:26:34</td>
			<td><a href='https://youtu.be/NylncBBRObw' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】大空建築
				入社試験しゅば！！！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/25</td>
			<td>02:19:36</td>
			<td><a href='https://youtu.be/6_WeWBviZLY' target='_blank' class='outlink' rel='nofollow'>【】おうた【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/26</td>
			<td>01:27:44</td>
			<td><a href='https://youtu.be/7_gZBFAXAug' target='_blank' class='outlink' rel='nofollow'>【GTAV】車で大暴走やるしゅば！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/11/28</td>
			<td>01:04:10</td>
			<td><a href='https://youtu.be/k5T1i-IHpoU' target='_blank' class='outlink' rel='nofollow'>【週末雑談】11/28
				おはようスバル　【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/28</td>
			<td>03:35:04</td>
			<td><a href='https://youtu.be/-j5bpk0eFYg' target='_blank' class='outlink' rel='nofollow'>【#3】ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/28</td>
			<td>02:19:22</td>
			<td><a href='https://youtu.be/jbncrFRrnDQ' target='_blank' class='outlink' rel='nofollow'>【スパイ映画】キングスマン同時視聴会：Kingsman:
				The Secret Service【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/11/29</td>
			<td>03:59:52</td>
			<td><a href='https://youtu.be/lMJD_8S47gs' target='_blank' class='outlink' rel='nofollow'>【#4】ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/02</td>
			<td>02:02:30</td>
			<td><a href='https://youtu.be/xnrCB2r3oiU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】どろぼうしゃんスバル：Thief
				Simulator【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/03</td>
			<td>03:05:48</td>
			<td><a href='https://youtu.be/XirNF9RzvIs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】yabai【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/05</td>
			<td>01:48:16</td>
			<td><a href='https://youtu.be/NVtaw4ql1J0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おやすみスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/05</td>
			<td>02:56:42</td>
			<td><a href='https://youtu.be/3Et1ae9PuOg' target='_blank' class='outlink' rel='nofollow'>【#5】ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/07</td>
			<td>01:03:22</td>
			<td><a href='https://youtu.be/RLzWfwLCD30' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ポンコツじゃない！！ＩＱ5億の学力をみよ！！！：Academic
				Ability Test【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/08</td>
			<td>02:01:00</td>
			<td><a href='https://youtu.be/XC9LpjeZrhA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】全自動炭焼きかまど！！！！すみじろう！！！！！つくる！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/10</td>
			<td>02:24:20</td>
			<td><a href='https://youtu.be/NblFY3rx1YE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】お泊りしたから雑談～～～！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/11</td>
			<td>01:59:58</td>
			<td><a href='https://youtu.be/vXAw-cZ6ryg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】視聴者分の１を探せ！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/12</td>
			<td>04:10:02</td>
			<td><a href='https://youtu.be/YL5O6R0Kmhs' target='_blank' class='outlink' rel='nofollow'>【#6】行くぞ難関！水の神殿！！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/13</td>
			<td>03:03:24</td>
			<td><a href='https://youtu.be/SEec24EgOxw' target='_blank' class='outlink' rel='nofollow'>【#7】今日こそクリアするぞ！水の神殿！！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/15</td>
			<td>00:55:48</td>
			<td><a href='https://youtu.be/mNZf8hFDedw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ママになりたいスバル！！：Mother
				Simulator【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/16</td>
			<td>03:05:28</td>
			<td><a href='https://youtu.be/iwjlQI4rkKA' target='_blank' class='outlink' rel='nofollow'>【#１】初めての！！！グランブルーファンタジー！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/18</td>
			<td>02:02:53</td>
			<td><a href='https://youtu.be/N4nZ52k4lhw' target='_blank' class='outlink' rel='nofollow'>【60万人記念】ぶっちゃけマシュマロ大会+ぷち逆凸～！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/19</td>
			<td>02:14:38</td>
			<td><a href='https://youtu.be/OzRL8xm_Oa8' target='_blank' class='outlink' rel='nofollow'>【】おはようスバル：定期雑談【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/19</td>
			<td>02:08:08</td>
			<td><a href='https://youtu.be/eEPgsTllQiQ' target='_blank' class='outlink' rel='nofollow'>【#8】ホラー？！墓場のダンジョン！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/20</td>
			<td>02:58:14</td>
			<td><a href='https://youtu.be/4fufXOKhPps' target='_blank' class='outlink' rel='nofollow'>【#9】リベンジ！！！墓場のボンゴボンゴ！！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/23</td>
			<td>00:59:12</td>
			<td><a href='https://youtu.be/kgr-yWszxfw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】2ndふぇすありがとうございました！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/23</td>
			<td>01:57:10</td>
			<td><a href='https://youtu.be/v4ePgw3qMZo' target='_blank' class='outlink' rel='nofollow'>【#２】はじめてのぐらぶるっ！初めてのガチャピン！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/24</td>
			<td>02:21:28</td>
			<td><a href='https://youtu.be/-X-tWOFR1t8' target='_blank' class='outlink' rel='nofollow'>【#生スバル】メリークリスマス！！！マインクラフト！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/25</td>
			<td>00:28:16</td>
			<td><a href='https://youtu.be/PZcLFXRskso' target='_blank' class='outlink' rel='nofollow'>【#ホロライブクリスマス】ホロライブクリスマス歌！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/26</td>
			<td>02:46:22</td>
			<td><a href='https://youtu.be/me4hAMZkI70' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/26</td>
			<td>03:13:08</td>
			<td><a href='https://youtu.be/S7vNhtz0H8o' target='_blank' class='outlink' rel='nofollow'>【#10】いくぜ！！！！砂漠の神殿！！！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/27</td>
			<td>04:06:20</td>
			<td><a href='https://youtu.be/3aup9bkCh3I' target='_blank' class='outlink' rel='nofollow'>【最終回】ガノンドロフ討伐！！！ゼルダの伝説時のオカリナ:The
				Legend of Zelda: Ocarina of Time【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2020/12/28</td>
			<td>02:12:46</td>
			<td><a href='https://youtu.be/SD89bWoUYWo' target='_blank' class='outlink' rel='nofollow'>【リズム天国】リズムにのるぜええええええええ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2020/12/31</td>
			<td>02:18:34</td>
			<td><a href='https://youtu.be/zHFC_ZKUITM' target='_blank' class='outlink' rel='nofollow'>【#３】なんか新ガチャが来るらしいぞ！！！！！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/01</td>
			<td>00:12:04</td>
			<td><a href='https://youtu.be/5-DJxNOHIrs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】正月運試し！ソセレ！！！！後半ゲストあり？！？！？！：SausageLegend【レート：1000~】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/01</td>
			<td>00:45:28</td>
			<td><a href='https://youtu.be/ABgstfN5viI' target='_blank' class='outlink' rel='nofollow'>🍉【#生スバル】正月運試し！ソセレ！！！！後半ゲストあり？！？！？！：SausageLegend【レート：100~】
				🍉</a></td>


		</tr>
		<tr>
			<td>2021/01/01</td>
			<td>02:27:12</td>
			<td><a href='https://youtu.be/FICUlVwL_9c' target='_blank' class='outlink' rel='nofollow'>【雑談】あけた～～～！！！！やった～～！！！！【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/02</td>
			<td>04:09:22</td>
			<td><a href='https://youtu.be/0zirp371ZXs' target='_blank' class='outlink' rel='nofollow'>【#１】怖い月がやってくる？！？シリーズ難関！ムジュラの仮面【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/03</td>
			<td>02:54:54</td>
			<td><a href='https://youtu.be/2D9u_lKeNKA' target='_blank' class='outlink' rel='nofollow'>【#2】怖い月がやってくる？！？シリーズ難関！ムジュラの仮面【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/03</td>
			<td>00:57:40</td>
			<td><a href='https://youtu.be/uCx_dHfisKI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】視聴者参加型マリカー！！かかってこいやぁ！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/05</td>
			<td>02:52:35</td>
			<td><a href='https://youtu.be/DWD8Kji1-q0' target='_blank' class='outlink' rel='nofollow'>【ホラゲー】この家なんかおかしいぞ！！！！House
				on the Hill【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/06</td>
			<td>01:27:12</td>
			<td><a href='https://youtu.be/Pbderb4EHC8' target='_blank' class='outlink' rel='nofollow'>【#生スバル】マリカ大会前ガチ練習：視聴者参加型スナイプ歓迎【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/07</td>
			<td>01:19:50</td>
			<td><a href='https://youtu.be/3VH_dPFUEa4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】FALL GUYS
				SUBARU：新シーズン来てたらしい！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/07</td>
			<td>01:49:38</td>
			<td><a href='https://youtu.be/OLd5osYw8_g' target='_blank' class='outlink' rel='nofollow'>【#４】ガチャピンとムックに会いたいグランブルーファンタジースバル：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/08</td>
			<td>02:39:42</td>
			<td><a href='https://youtu.be/hUYBu5TY5uA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】映画オタクとみるエイリアン２：alian2
				the theatrical (1986：137minutes)【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/09</td>
			<td>02:03:20</td>
			<td><a href='https://youtu.be/0Qv9v0QYei4' target='_blank' class='outlink' rel='nofollow'>【】おはようスバル【】</a></td>


		</tr>
		<tr>
			<td>2021/01/09</td>
			<td>03:00:23</td>
			<td><a href='https://youtu.be/puxgwmeJZhk' target='_blank' class='outlink' rel='nofollow'>【#3】ムジュラの仮面やる！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/10</td>
			<td>03:36:40</td>
			<td><a href='https://youtu.be/kmNJpxY8lrQ' target='_blank' class='outlink' rel='nofollow'>【#４】スノーヘッドの神殿！！ムジュラの仮面！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/10</td>
			<td>01:01:12</td>
			<td><a href='https://youtu.be/GpqsMTUmjB0' target='_blank' class='outlink' rel='nofollow'>【 #雑ホロ杯 /マリカDX8&ZeroWidthSpace;】行くぞおおおおおおおおお！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/10</td>
			<td>03:01:30</td>
			<td><a href='https://youtu.be/xhQc8VsXkWY' target='_blank' class='outlink' rel='nofollow'>【#おかあくすば】おかゆあくあすばる合同練習会【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/11</td>
			<td>02:43:52</td>
			<td><a href='https://youtu.be/OrR_qVytQ74' target='_blank' class='outlink' rel='nofollow'>【#ホロお正月CUP&ZeroWidthSpace;】がんばる！！！！！！！！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/12</td>
			<td>01:20:42</td>
			<td><a href='https://youtu.be/nW_iu41RoEQ' target='_blank' class='outlink' rel='nofollow'>【#ホロL4D2】８人対戦Ｌ４Ｄ２で大暴れするちゅば！！！！！！！！【ＦＡＭＳ視点】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/14</td>
			<td>01:56:38</td>
			<td><a href='https://youtu.be/G3oe0xYs9DQ' target='_blank' class='outlink' rel='nofollow'>【#５】明かされる最推しの過去？！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/15</td>
			<td>02:17:02</td>
			<td><a href='https://youtu.be/YiS-Uo2krN0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】３Ｄおやすみすばる：Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/17</td>
			<td>04:01:56</td>
			<td><a href='https://youtu.be/0KLnCy691Ts' target='_blank' class='outlink' rel='nofollow'>【#5】海の神殿にいくぞ！！！ムジュラの仮面！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/20</td>
			<td>01:02:46</td>
			<td><a href='https://youtu.be/zA9P6LGLDSw' target='_blank' class='outlink'
						 rel='nofollow'>【ミオスバ】初心忘れるべからず【今日地獄です】</a></td>


		</tr>
		<tr>
			<td>2021/01/21</td>
			<td>01:51:52</td>
			<td><a href='https://youtu.be/ujtn9sZdcWQ' target='_blank' class='outlink' rel='nofollow'>【#６】霧の島ガロンゾ？いくちゅば！！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/23</td>
			<td>02:20:28</td>
			<td><a href='https://youtu.be/v-hFx0gSMNw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようすばる雑談：Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/23</td>
			<td>03:29:08</td>
			<td><a href='https://youtu.be/02WC5ZNwaIw' target='_blank' class='outlink' rel='nofollow'>【#6】グレートベイの神殿攻略！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/24</td>
			<td>03:37:32</td>
			<td><a href='https://youtu.be/SStQvFj42nw' target='_blank' class='outlink' rel='nofollow'>【#7】仮面集めーー！！！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/26</td>
			<td>02:52:04</td>
			<td><a href='https://youtu.be/6U0pTdoOjiA' target='_blank' class='outlink' rel='nofollow'>【MINECRAFT】やばい・・・【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/28</td>
			<td>01:55:10</td>
			<td><a href='https://youtu.be/2AaCaCoRMB0' target='_blank' class='outlink' rel='nofollow'>【#７】明かされるラカムの過去！？：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/30</td>
			<td>02:07:44</td>
			<td><a href='https://youtu.be/rA5MQyrW0EY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：ＦＲＥＥＴＡＬＫ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/01/30</td>
			<td>03:40:58</td>
			<td><a href='https://youtu.be/b2lVLn-z5yM' target='_blank' class='outlink' rel='nofollow'>【#8】最難関？！谷で神殿をみつけよ！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/01/31</td>
			<td>03:37:36</td>
			<td><a href='https://youtu.be/hcjnO7-Y2GI' target='_blank' class='outlink' rel='nofollow'>【#9】最難関？！ロックビル！！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/02</td>
			<td>03:22:33</td>
			<td><a href='https://youtu.be/sDYIpRyEvNo' target='_blank' class='outlink' rel='nofollow'>【MINECRAFT】やばい・・・Part2【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/03</td>
			<td>02:38:46</td>
			<td><a href='https://youtu.be/MhRRfZHevug' target='_blank' class='outlink' rel='nofollow'>【MINECRAFT】やばい・・・part3【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/05</td>
			<td>02:16:14</td>
			<td><a href='https://youtu.be/qUB3ps86mOE' target='_blank' class='outlink' rel='nofollow'>【#８】黒騎士逮捕ってマジ？：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/06</td>
			<td>02:02:15</td>
			<td><a href='https://youtu.be/07AzK6levMM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル！：Free
				Talk【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/02/06</td>
			<td>03:02:26</td>
			<td><a href='https://youtu.be/LDp7tPX1yrU' target='_blank' class='outlink' rel='nofollow'>【#10】仮面集める！！！：The Legend
				of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/08</td>
			<td>01:41:32</td>
			<td><a href='https://youtu.be/k8QM0GXYuDQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】70万登録感謝祭！！！ふりーだむ！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/09</td>
			<td>01:27:26</td>
			<td><a href='https://youtu.be/RtNh2VNJm-I' target='_blank' class='outlink' rel='nofollow'>【#アイドルデス】Bloom!アイドルDEATH
				GAME【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/02/10</td>
			<td>02:01:16</td>
			<td><a href='https://youtu.be/pGdfRRUGbzI' target='_blank' class='outlink' rel='nofollow'>【#９】頼む…服を着ててくれ…ラビ島編！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/12</td>
			<td>03:08:24</td>
			<td><a href='https://youtu.be/qWetncnJG_M' target='_blank' class='outlink' rel='nofollow'>【MINECRAFT】そろそろ納品？！台所と脱衣所つくるぞ！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/13</td>
			<td>03:53:10</td>
			<td><a href='https://youtu.be/9G9_dcjYN1E' target='_blank' class='outlink' rel='nofollow'>【#１１】最終回！！！！！！！！！：The
				Legend of Zelda: Majora's Mask【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/14</td>
			<td>02:16:20</td>
			<td><a href='https://youtu.be/ryUa-7_ylUo' target='_blank' class='outlink' rel='nofollow'>【】おはようスバル：FREE
				TALK【】</a></td>


		</tr>
		<tr>
			<td>2021/02/14</td>
			<td>01:16:14</td>
			<td><a href='https://youtu.be/L9TxWjDrZoM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】グリームニルガチャ：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/16</td>
			<td>01:24:13</td>
			<td><a href='https://youtu.be/3gOhLstrTvs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ライブ直前！？DEATHルーレットASMR💛【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/18</td>
			<td>00:58:54</td>
			<td><a href='https://youtu.be/bRXQwAGNCso' target='_blank' class='outlink' rel='nofollow'>【※告知有】Bloombありがとうございましあ！！：thanks
				for Bloom!【】</a></td>


		</tr>
		<tr>
			<td>2021/02/18</td>
			<td>01:22:37</td>
			<td><a href='https://youtu.be/_mggdfxxEmQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバるしマイクラ！！！！：rusia&amp;subaru
				minecraft【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/20</td>
			<td>02:58:50</td>
			<td><a href='https://youtu.be/d6ouim9ZsyI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/20</td>
			<td>04:06:51</td>
			<td><a href='https://youtu.be/e92qKH9kpEU' target='_blank' class='outlink' rel='nofollow'>【初見実況】零～眞紅の蝶～をするスバル：PROJECT
				ZERO 2 Wii EDITION【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/21</td>
			<td>03:56:13</td>
			<td><a href='https://youtu.be/08g-NSTNPVY' target='_blank' class='outlink' rel='nofollow'>【#２】零～眞紅の蝶～をするスバル：PROJECT
				ZERO 2 Wii EDITION【初見実況】</a></td>


		</tr>
		<tr>
			<td>2021/02/21</td>
			<td>00:00:05</td>
			<td><a href='https://youtu.be/toQoiiwyGjU' target='_blank' class='outlink' rel='nofollow'>ランダムスバル：ramdom
				subaru</a></td>


		</tr>
		<tr>
			<td>2021/02/25</td>
			<td>01:02:19</td>
			<td><a href='https://youtu.be/8WzZjLlVOpc' target='_blank' class='outlink' rel='nofollow'>【♯生スバル】今日はバナナでキメる：Sausage
				Legend【レート1000↑】</a></td>


		</tr>
		<tr>
			<td>2021/02/26</td>
			<td>00:00:13</td>
			<td><a href='https://youtu.be/j4dX1wGpMjc' target='_blank' class='outlink' rel='nofollow'>初期スバル：Pure SUBARU</a>
			</td>


		</tr>
		<tr>
			<td>2021/02/27</td>
			<td>02:09:18</td>
			<td><a href='https://youtu.be/Y2g-ucwPcrw' target='_blank' class='outlink' rel='nofollow'>【♯生スバル】おはようスバル：Free
				Talk【ホロライブ：大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/02/27</td>
			<td>02:08:33</td>
			<td><a href='https://youtu.be/1FcShCHRS8o' target='_blank' class='outlink' rel='nofollow'>【#３】零～眞紅の蝶～をするスバル：PROJECT
				ZERO 2 Wii EDITION【初見実況】</a></td>


		</tr>
		<tr>
			<td>2021/03/02</td>
			<td>00:59:29</td>
			<td><a href='https://youtu.be/F6n6x-8ZBBU' target='_blank' class='outlink' rel='nofollow'>【♯10】オルキスちゃんを救いたい：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/03</td>
			<td>00:59:42</td>
			<td><a href='https://youtu.be/SiXUqwCTmuA' target='_blank' class='outlink' rel='nofollow'>【運営公認】秘密を暴け！大空スバル探偵事務所！：OOZORA
				Detective agency investigate the secrets of the Hololive audition🐣</a></td>


		</tr>
		<tr>
			<td>2021/03/06</td>
			<td>01:34:14</td>
			<td><a href='https://youtu.be/HI9HKcUf51k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おやすみスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/07</td>
			<td>02:10:24</td>
			<td><a href='https://youtu.be/SSPtVsGRcjI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】つぐのひすばる：TUGUNOHI【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/09</td>
			<td>01:48:21</td>
			<td><a href='https://youtu.be/qQdHnA2-O_Y' target='_blank' class='outlink' rel='nofollow'>【#１】完全初見！！アンダーテールする！！！：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/09</td>
			<td>02:01:17</td>
			<td><a href='https://youtu.be/pWhfMalZMaw' target='_blank' class='outlink' rel='nofollow'>【#２】完全初見！アンダーテール：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/09</td>
			<td>00:59:59</td>
			<td><a href='https://youtu.be/cV1Apr0qTrA' target='_blank' class='outlink' rel='nofollow'>【】うた：アーカイブ無し【】</a></td>


		</tr>
		<tr>
			<td>2021/03/11</td>
			<td>02:20:21</td>
			<td><a href='https://youtu.be/eEA5zA0GkfM' target='_blank' class='outlink' rel='nofollow'>【#ホロ鳥 /
				#holobirds】KFP3号店作るちゅば！！！！：MINE CRAFT【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/03/12</td>
			<td>02:16:42</td>
			<td><a href='https://youtu.be/YIpJ_x76xhg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】１時間で何キロやせる！？リングフィットアドベンチャー！：Ring
				Fit Adventure【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/13</td>
			<td>02:05:41</td>
			<td><a href='https://youtu.be/TxhywIY2QHw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/13</td>
			<td>04:46:38</td>
			<td><a href='https://youtu.be/85sC99YUkt4' target='_blank' class='outlink' rel='nofollow'>【#最終回】零～眞紅の蝶～をするスバル：PROJECT
				ZERO 2 Wii EDITION【初見実況】</a></td>


		</tr>
		<tr>
			<td>2021/03/14</td>
			<td>03:55:53</td>
			<td><a href='https://youtu.be/zrIDw5iR2x0' target='_blank' class='outlink' rel='nofollow'>【♯12】お覚悟！！！フリーシア&amp;マリス！！！！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/16</td>
			<td>01:06:29</td>
			<td><a href='https://youtu.be/tWG53VJzPHg' target='_blank' class='outlink' rel='nofollow'>【#ミオスバ】第1回　俺の考えるホロライブ最強企画【大空スバル/大神ミオ】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/18</td>
			<td>02:04:21</td>
			<td><a href='https://youtu.be/rRhLCP2ykig' target='_blank' class='outlink' rel='nofollow'>【#生スバル】アイドルのレッスンってなにすんの？：What
				are you doing in idol lessons?【ホロリブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/19</td>
			<td>02:01:47</td>
			<td><a href='https://youtu.be/CHvZk19prog' target='_blank' class='outlink' rel='nofollow'>【#生スバル】マイクラおさんぽ建築スバル：MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/20</td>
			<td>02:12:32</td>
			<td><a href='https://youtu.be/1fT_wz7X8TM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/20</td>
			<td>00:49:02</td>
			<td><a href='https://youtu.be/3m9OsJ3n3gQ' target='_blank' class='outlink' rel='nofollow'>【♯13】グラブル100連ガチャ！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/20</td>
			<td>02:31:02</td>
			<td><a href='https://youtu.be/GctNU3HG2SQ' target='_blank' class='outlink' rel='nofollow'>【大空スバル視点】女登呂温泉・湯けむり殺人事件【ホロミス劇場】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/21</td>
			<td>02:43:10</td>
			<td><a href='https://youtu.be/UhlKk6lxUOw' target='_blank' class='outlink' rel='nofollow'>【♯14】とりまトッポブで！スバル！！！！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/22</td>
			<td>01:28:02</td>
			<td><a href='https://youtu.be/qfq5Ve_Ir4Y' target='_blank' class='outlink' rel='nofollow'>【#３】完全初見！アンダーテール：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/22</td>
			<td>06:05:21</td>
			<td><a href='https://youtu.be/sz_Ela139rU' target='_blank' class='outlink' rel='nofollow'>【#最終回】完全初見！トリエル生存ルート！：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/03/23</td>
			<td>01:39:23</td>
			<td><a href='https://youtu.be/BBRoezXqI3k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】空気読みスバル：Air
				Reaging Game【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/24</td>
			<td>01:36:35</td>
			<td><a href='https://youtu.be/lVxMMjDpJVs' target='_blank' class='outlink' rel='nofollow'>【80万人記念】大空警察！！：OOZORA
				Police【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/25</td>
			<td>02:08:10</td>
			<td><a href='https://youtu.be/y4ibE6Cl8hs' target='_blank' class='outlink' rel='nofollow'>【※ネタバレ有】絶体絶命都市２すばる：Raw
				Danger２【#生スバル】</a></td>


		</tr>
		<tr>
			<td>2021/03/27</td>
			<td>02:32:29</td>
			<td><a href='https://youtu.be/zpDBzH5NRqw' target='_blank' class='outlink' rel='nofollow'>【】おはようスバル：FREE
				TALK【】</a></td>


		</tr>
		<tr>
			<td>2021/03/27</td>
			<td>03:33:37</td>
			<td><a href='https://youtu.be/6jyuDNoiDwk' target='_blank' class='outlink' rel='nofollow'>【※ネタバレ有】絶体絶命都市２すばる：Raw
				Danger２【#生スバル&ZeroWidthSpace;】</a></td>


		</tr>
		<tr>
			<td>2021/03/28</td>
			<td>02:53:26</td>
			<td><a href='https://youtu.be/5EqyRq_LxCw' target='_blank' class='outlink' rel='nofollow'>【※ネタバレ有】絶体絶命都市２すばる：Raw
				Danger２【#生スバル&ZeroWidthSpace;】</a></td>


		</tr>
		<tr>
			<td>2021/03/31</td>
			<td>01:43:48</td>
			<td><a href='https://youtu.be/7S9XOJEzjao' target='_blank' class='outlink' rel='nofollow'>【#生スバル】帰ってきた！！！！！視聴者分の１！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/01</td>
			<td>01:24:18</td>
			<td><a href='https://youtu.be/VFQzN4iAmtI' target='_blank' class='outlink' rel='nofollow'>【】すばるの！全部ホントニュース！【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/03</td>
			<td>02:48:17</td>
			<td><a href='https://youtu.be/VW6SVPIiIvU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/04</td>
			<td>04:37:01</td>
			<td><a href='https://youtu.be/TGOenZUIxd4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バイオハザード7：RESIDENT
				EVIL 7 biohazard【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/05</td>
			<td>03:06:51</td>
			<td><a href='https://youtu.be/0pEHPCJMQ08' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バイオハザード7：RESIDENT
				EVIL 7 biohazard【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/06</td>
			<td>01:32:25</td>
			<td><a href='https://youtu.be/eCk6rDLSBvs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】カプとれでクレーンゲームすばう/Game
				Center Crane Games【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/08</td>
			<td>03:27:14</td>
			<td><a href='https://youtu.be/9FiX3Cjny4E' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バイオハザード7最終回：RESIDENT
				EVIL 7 biohazard【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/09</td>
			<td>02:31:40</td>
			<td><a href='https://youtu.be/8OHLlG2aQTs' target='_blank' class='outlink' rel='nofollow'>【#ホロAmongUs&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;】まじでやばいすばう【ホロライブ/大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/10</td>
			<td>02:15:04</td>
			<td><a href='https://youtu.be/cTyPT0Zk4-M' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/10</td>
			<td>03:49:02</td>
			<td><a href='https://youtu.be/dNM_iJCGRDQ' target='_blank' class='outlink' rel='nofollow'>【♯15】リーシャと共に！！おひさし本編：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/13</td>
			<td>11:27:42</td>
			<td><a href='https://youtu.be/lHtlf0dygPM' target='_blank' class='outlink' rel='nofollow'>【#１】鬼畜ゲー？！最難関Gルート耐久！：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/13</td>
			<td>00:58:29</td>
			<td><a href='https://youtu.be/kKwSqs5rZjI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】初見実況！ロックマン２すばる！：Megaman【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/16</td>
			<td>02:18:09</td>
			<td><a href='https://youtu.be/Vzrq6ehJ_Oc' target='_blank' class='outlink' rel='nofollow'>【#生スバル&ZeroWidthSpace;】バイオハザード7DLC
				Not a Hero：RESIDENT EVIL 7 biohazard【※ネタバレ有】</a></td>


		</tr>
		<tr>
			<td>2021/04/17</td>
			<td>02:30:56</td>
			<td><a href='https://youtu.be/g5LH-XPQ_oQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/17</td>
			<td>07:34:56</td>
			<td><a href='https://youtu.be/GfYmvsRLAcE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】リベンジ！！ロックマン２すばる！：Megaman【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/18</td>
			<td>04:49:31</td>
			<td><a href='https://youtu.be/cHDeTO2Bj0Q' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ロックマン２すばる！クリアまで！！：Megaman【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/18</td>
			<td>00:46:07</td>
			<td><a href='https://youtu.be/bir5v6ey1P4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ロックマン２すばる！まじで最後！！！！！！：Megaman【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/20</td>
			<td>00:42:34</td>
			<td><a href='https://youtu.be/Cq2U6XE8Y68' target='_blank' class='outlink' rel='nofollow'>【#最終回】鬼畜ゲー？！最難関Gルート耐久！本当の本当の最後！：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/21</td>
			<td>11:40:12</td>
			<td><a href='https://youtu.be/33Rdd1PHRkU' target='_blank' class='outlink' rel='nofollow'>【#２】鬼畜ゲー？！最難関Gルート耐久！：UNDERTALE【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/04/26</td>
			<td>01:40:02</td>
			<td><a href='https://youtu.be/WkOCD9o5EAM' target='_blank' class='outlink' rel='nofollow'>【】うおおおおおおおおおおおおお/my
				voice is.........【】</a></td>


		</tr>
		<tr>
			<td>2021/04/27</td>
			<td>02:11:56</td>
			<td><a href='https://youtu.be/STmEvp2WTxc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バイオハザード7DLC END
				OF ZOE：RESIDENT EVIL 7 biohazard DLC【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/29</td>
			<td>02:17:33</td>
			<td><a href='https://youtu.be/9Z81DQCERtU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】1章終盤！第三勢力登場？！なんだおめえら！！！！/gran
				blue fantasy【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/04/30</td>
			<td>01:31:52</td>
			<td><a href='https://youtu.be/pcpVmdvLGlk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】うま娘が気になりすぎてガチ乗馬しにいったしゅばああああああレポ！！！！/Horseback
				riding experience report【】</a></td>


		</tr>
		<tr>
			<td>2021/05/01</td>
			<td>00:26:33</td>
			<td><a href='https://youtu.be/zgzMM3B9YeY' target='_blank' class='outlink' rel='nofollow'>【】おはすば【】</a></td>


		</tr>
		<tr>
			<td>2021/05/01</td>
			<td>00:57:44</td>
			<td><a href='https://youtu.be/ESu_muCBq6k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見！？ウマ娘しゅばああああああああああ/UMAMUSUME【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/01</td>
			<td>02:48:12</td>
			<td><a href='https://youtu.be/ji4eRk5WuxA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見！？ウマ娘しゅばああああああああああ/UMAMUSUME【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/02</td>
			<td>03:46:56</td>
			<td><a href='https://youtu.be/lsygJhiTx2s' target='_blank' class='outlink' rel='nofollow'>【#生スバル】らいすしゃわ～～～～～～わ～～～～！！！！：UMA
				MUSUME【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/04</td>
			<td>01:25:01</td>
			<td><a href='https://youtu.be/VSLp&#45;&#45;YmgPQ' target='_blank' class='outlink' rel='nofollow'>【】歯の痛みをモンスターにぶつけるモンハンゲリラしゅばああああああああああああああ【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/05</td>
			<td>02:49:58</td>
			<td><a href='https://youtu.be/yzVS_fl9rSU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】お兄様！お姉さま大集合！！！行くぞ！！日経賞！！！/
				UMAMUSUME【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/05/07</td>
			<td>01:04:13</td>
			<td><a href='https://youtu.be/4FpQSnIs26k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おかころの間に割り込みたいスバル：モーリーオンライン：claw
				machine game【たのじみ！！】</a></td>


		</tr>
		<tr>
			<td>2021/05/08</td>
			<td>02:13:36</td>
			<td><a href='https://youtu.be/04Ic6Bl1glg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/08</td>
			<td>01:35:40</td>
			<td><a href='https://youtu.be/ruYrvVFdij4' target='_blank' class='outlink' rel='nofollow'>【#１】完全初見！悪魔退治やるしゅばああああああ！！！：DMC３【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/09</td>
			<td>04:45:17</td>
			<td><a href='https://youtu.be/P0Fq-bKdNro' target='_blank' class='outlink' rel='nofollow'>【#２】リベンジやるしゅばああああああ！！Duck
				May Cry！：DMC３【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/12</td>
			<td>02:02:40</td>
			<td><a href='https://youtu.be/gLuIiQPfHQE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】布教凸待ち/TOTUMACHI【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/13</td>
			<td>00:58:26</td>
			<td><a href='https://youtu.be/cNqbcr8jNHo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】まいくらしゅばあああああああああああああ/マイクラ【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/14</td>
			<td>01:38:36</td>
			<td><a href='https://youtu.be/pGdQB7nPOi8' target='_blank' class='outlink' rel='nofollow'>【視聴者参加型】クイズバトルオンラインで勝負ちゅばあああああああああああああ！！！！！！！！！【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/15</td>
			<td>02:02:56</td>
			<td><a href='https://youtu.be/pWY59Zu13XI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル/Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/15</td>
			<td>05:21:04</td>
			<td><a href='https://youtu.be/HaKW7hxQJYM' target='_blank' class='outlink' rel='nofollow'>【#最終回】続きやるしゅばああああああ！！Duck
				May Cry！：DMC３【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/16</td>
			<td>05:40:33</td>
			<td><a href='https://youtu.be/8J30L8myCKc' target='_blank' class='outlink' rel='nofollow'>【#17】グラブル第一章！完結！！！！！：granblue
				fantasy story【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/18</td>
			<td>01:35:50</td>
			<td><a href='https://youtu.be/ZF08XhEAvmg' target='_blank' class='outlink' rel='nofollow'>【#holounggas #holobirds
				#ホロ鳥】鳥山（bird mountain）つくるしゅばあああああ！！！！/Reine&amp;Subaru Minecraft【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/05/20</td>
			<td>01:40:27</td>
			<td><a href='https://youtu.be/yp19LT9qJe4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】2年間でスバ友はどう変わった？！リスナー調査しゅば！！！！：subaru
				lisner Reserch!!!!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/21</td>
			<td>00:22:01</td>
			<td><a href='https://youtu.be/K6kJV6b3eqs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】すいません！機材トラブルで来週になります！！！！：sausage
				legend【レート：1000↑】</a></td>


		</tr>
		<tr>
			<td>2021/05/22</td>
			<td>01:46:54</td>
			<td><a href='https://youtu.be/xAh1qYk6Wsc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/22</td>
			<td>05:22:18</td>
			<td><a href='https://youtu.be/aqbZ5jk5Tg0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バイオハザードヴィレッジ：Resident
				Evil Village【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/23</td>
			<td>05:28:56</td>
			<td><a href='https://youtu.be/PuvM9PNM8vI' target='_blank' class='outlink' rel='nofollow'>【#2】バイオハザードヴィレッジ：Resident
				Evil Village【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/24</td>
			<td>01:01:57</td>
			<td><a href='https://youtu.be/5jyLefFYPyM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】こっちが本当！第十回ソーセージレジェンド大会！！！：sausage
				legend【レート：1000↑】</a></td>


		</tr>
		<tr>
			<td>2021/05/24</td>
			<td>03:04:55</td>
			<td><a href='https://youtu.be/Oj1dunXOn3g' target='_blank' class='outlink' rel='nofollow'>【#最終回】バイオハザードヴィレッジ：Resident
				Evil Village【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/26</td>
			<td>00:59:02</td>
			<td><a href='https://youtu.be/ByESAQZnQXk' target='_blank' class='outlink' rel='nofollow'>【#大空スバル新衣装】90万人記念新衣装大発表会/NEW
				OUT FIT【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/28</td>
			<td>01:05:36</td>
			<td><a href='https://youtu.be/kdI0vBpWFkQ' target='_blank' class='outlink' rel='nofollow'>【#ポントーク】ギリギリ！！！PONトーク！！！！！！/PON
				TALK【ホロライブ/みこスバ】</a></td>


		</tr>
		<tr>
			<td>2021/05/29</td>
			<td>01:28:26</td>
			<td><a href='https://youtu.be/u0GBcKzkZcs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはスバ/Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/05/29</td>
			<td>04:00:33</td>
			<td><a href='https://youtu.be/r1Saj9-GHhg' target='_blank' class='outlink' rel='nofollow'>【#１】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/05/30</td>
			<td>05:26:23</td>
			<td><a href='https://youtu.be/Ov6KR0htGYA' target='_blank' class='outlink' rel='nofollow'>【#2】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/01</td>
			<td>02:58:16</td>
			<td><a href='https://youtu.be/m9IQH5WIGuQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ハリーポッター賢者の石同時視聴会：Harry
				Potter and the Philosopher's Stone movie party!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/03</td>
			<td>00:52:04</td>
			<td><a href='https://youtu.be/0y3CkFyPcW4' target='_blank' class='outlink' rel='nofollow'>【#スバちょこルーナ】地獄くじ引き？！足つぼダンス？！？かかってこいや！！！！:subachocoruna
				3D stream【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/06/04</td>
			<td>00:57:55</td>
			<td><a href='https://youtu.be/8uB_hqKNF5k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】びっくり系ホラゲー/Horror
				game【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/05</td>
			<td>01:57:09</td>
			<td><a href='https://youtu.be/YFXr_KJapHI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはスバ/Free
				Talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/05</td>
			<td>04:53:03</td>
			<td><a href='https://youtu.be/bIhIq8f5gjM' target='_blank' class='outlink' rel='nofollow'>【#3】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/06</td>
			<td>05:40:51</td>
			<td><a href='https://youtu.be/6oeLAo6DFHI' target='_blank' class='outlink' rel='nofollow'>【#4】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/08</td>
			<td>02:23:19</td>
			<td><a href='https://youtu.be/RoFhQcpJ_l4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】クリアまで！！びっくり系ホラゲー/Horror
				game【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/11</td>
			<td>02:29:14</td>
			<td><a href='https://youtu.be/zxVPdZjZS7U' target='_blank' class='outlink' rel='nofollow'>【#生スバル】The Henry
				Stickminであそぶしゅばあああああああああ！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/12</td>
			<td>01:58:04</td>
			<td><a href='https://youtu.be/gh57KeYIdWU' target='_blank' class='outlink' rel='nofollow'>【】free talk/おはスバ【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/12</td>
			<td>05:19:16</td>
			<td><a href='https://youtu.be/GZIdmAhkGwQ' target='_blank' class='outlink' rel='nofollow'>【#5】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/13</td>
			<td>06:58:25</td>
			<td><a href='https://youtu.be/zwSPBv7W2HI' target='_blank' class='outlink' rel='nofollow'>【#6】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/14</td>
			<td>01:12:52</td>
			<td><a href='https://youtu.be/gM2oV5F9XEk' target='_blank' class='outlink' rel='nofollow'>【#すばおかみょーん】地獄なりきりUNO【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/15</td>
			<td>01:34:12</td>
			<td><a href='https://youtu.be/AFq464pVltU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】なんかやばいスタジオでアニメのED収録してきたぞレポ！！：Report
				on the recording of the anime ED【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/16</td>
			<td>01:39:08</td>
			<td><a href='https://youtu.be/8lLTNBX1U_M' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏祭り会場みにいくぞ！！！！mine
				craft！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/19</td>
			<td>04:31:40</td>
			<td><a href='https://youtu.be/y7WHzskFGfM' target='_blank' class='outlink' rel='nofollow'>【#6】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/19</td>
			<td>01:37:15</td>
			<td><a href='https://youtu.be/3Y3CXVZf7SE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】NieR
				Re[in]carnation初見実況するしゅばああああああああああああああああ【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/20</td>
			<td>02:02:34</td>
			<td><a href='https://youtu.be/_fHT34m5W4U' target='_blank' class='outlink' rel='nofollow'>【】free talk/おはスバ【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/22</td>
			<td>00:29:40</td>
			<td><a href='https://youtu.be/-ixsnZp-E1s' target='_blank' class='outlink' rel='nofollow'>【#イカロスジェットコースター】大清楚アイドルなら常識クイズも余裕しゅば！！！！！スバトワコラボ！/Common
				sense quiz subatowa【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/06/23</td>
			<td>01:30:58</td>
			<td><a href='https://youtu.be/69G424cBzms' target='_blank' class='outlink' rel='nofollow'>【#大空建設】夏祭り準備みんなでするしゅばああああああああああ！！minecraft
				【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/06/26</td>
			<td>05:50:34</td>
			<td><a href='https://youtu.be/c6YxMrWaLRE' target='_blank' class='outlink' rel='nofollow'>【#8】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/27</td>
			<td>06:14:49</td>
			<td><a href='https://youtu.be/2ywSWONXIrM' target='_blank' class='outlink' rel='nofollow'>【#9】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/06/27</td>
			<td>02:43:07</td>
			<td><a href='https://youtu.be/Bj1jshJaSDY' target='_blank' class='outlink' rel='nofollow'>【#うさ建夏祭り】夏祭りみんなでいくしゅばああああああああああああ！minecraft
				【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/06/28</td>
			<td>01:02:30</td>
			<td><a href='https://youtu.be/6a1dDxIsd6Y' target='_blank' class='outlink' rel='nofollow'>【#ホロプラ】第１部！！視聴者参加型アイドルP対決？！アイプラするちゅばああああ！！！！【IDOLY
				PRIDE/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/28</td>
			<td>01:08:24</td>
			<td><a href='https://youtu.be/sN9-I9XkcsY' target='_blank' class='outlink' rel='nofollow'>【IDOLY
				PRIDE】第２部！！アイプラするちゅばああああああああ！！！！！！【#ホロプラ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/06/30</td>
			<td>00:59:48</td>
			<td><a href='https://youtu.be/GbTdxtWMrsU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】罰ゲーム！！！需要？！？知らねぇ！！！ガチASMR地獄配信！！！！：DEATH
				ASMR stream【】</a></td>


		</tr>
		<tr>
			<td>2021/07/02</td>
			<td>01:02:31</td>
			<td><a href='https://youtu.be/I8Q7nMijBys' target='_blank' class='outlink' rel='nofollow'>【#おたおめスバル】おたんじょうび！！！！！！！！！！HAPPY
				BIRTH DAY SUBARU!!!【見てみな、飛ぶぞ】</a></td>


		</tr>
		<tr>
			<td>2021/07/03</td>
			<td>02:12:31</td>
			<td><a href='https://youtu.be/BrUuY9wrCdA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】free
				talk/おはスバ【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/03</td>
			<td>04:41:27</td>
			<td><a href='https://youtu.be/rJJTJA_T_b0' target='_blank' class='outlink' rel='nofollow'>【#10】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/04</td>
			<td>05:38:14</td>
			<td><a href='https://youtu.be/NidpuUfzfrQ' target='_blank' class='outlink' rel='nofollow'>【#11】DQシリーズ完全初見！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/08</td>
			<td>00:55:35</td>
			<td><a href='https://youtu.be/v_jVJt5ub1o' target='_blank' class='outlink' rel='nofollow'>【料理配信】人生初？！揚げバター作るしゅば！！！！！！！！！！！！/Cooking
				fried butter First time in my life【】</a></td>


		</tr>
		<tr>
			<td>2021/07/09</td>
			<td>01:05:45</td>
			<td><a href='https://youtu.be/N16A2XNu0L4' target='_blank' class='outlink' rel='nofollow'>【#大空警察】第２回大空警察しゅばあああああああああああああ/OOZORA
				POLICE【逮捕しゅば！！！】</a></td>


		</tr>
		<tr>
			<td>2021/07/10</td>
			<td>05:29:58</td>
			<td><a href='https://youtu.be/td5_LE8Ccj8' target='_blank' class='outlink' rel='nofollow'>【#12】DQシリーズ完全初見！ラストダンジョン！！！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/10</td>
			<td>02:24:47</td>
			<td><a href='https://youtu.be/PT58tchood4' target='_blank' class='outlink' rel='nofollow'>【#最終回？】DQシリーズ完全初見！クリアするぞ！！！！！！！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/11</td>
			<td>00:57:49</td>
			<td><a href='https://youtu.be/vnaW6DJc-Zc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】free
				talk/おはスバ【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/17</td>
			<td>03:10:03</td>
			<td><a href='https://youtu.be/a7QdcTjK2PI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】free
				talk/おはスバ【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/18</td>
			<td>01:58:48</td>
			<td><a href='https://youtu.be/Kk9Kq-cfBdg' target='_blank' class='outlink' rel='nofollow'>【観覧注意】顕微鏡配信しゅばあああああああ！！！！/Stream
				to see the micro world with a microscope【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/20</td>
			<td>01:03:08</td>
			<td><a href='https://youtu.be/cQgLAgOLh74' target='_blank' class='outlink' rel='nofollow'>【#生スバル】悪い子はいねえか～～！！！！大空警察パトロールちゅば！！/MINE
				CRAFT【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/07/21</td>
			<td>01:01:56</td>
			<td><a href='https://youtu.be/cPxE14YqJKE' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】みんなはどっち派？！アンケートで決着をつけるしゅばああああああああああ！！！！！！！！/Let`s
				QUESTIONNAIRE‼‼‼【Viewer participation type】</a></td>


		</tr>
		<tr>
			<td>2021/07/24</td>
			<td>01:04:47</td>
			<td><a href='https://youtu.be/Zdy7fPogJvI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おきれますように！！！　おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/24</td>
			<td>05:57:30</td>
			<td><a href='https://youtu.be/YhRKFUCooik' target='_blank' class='outlink' rel='nofollow'>【#クリア後裏ルート】DQシリーズ完全初見！裏ルートいくぞ！！！ドラゴンクエスト8！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/25</td>
			<td>03:04:01</td>
			<td><a href='https://youtu.be/FrIeQGmkY58' target='_blank' class='outlink' rel='nofollow'>【#生スバル】初見実況！！俺たちの！！！！！レンジャーサインしゅば！！！：GRANBLUE
				FANTASY【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/27</td>
			<td>00:05:23</td>
			<td><a href='https://youtu.be/Wz6Os0EzyRM' target='_blank' class='outlink' rel='nofollow'>【#ババドナ】無音の世界？！大声出したら即終了！！/If
				you shout out, it will end immediately【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/27</td>
			<td>00:56:15</td>
			<td><a href='https://youtu.be/GXJGd8WmEto' target='_blank' class='outlink' rel='nofollow'>【#ババドナ】無音の世界？！大声出したら即終了！！/If
				you shout out, it will end immediately【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/07/28</td>
			<td>01:28:15</td>
			<td><a href='https://youtu.be/zPCYveAOQJI' target='_blank' class='outlink' rel='nofollow'>【#すばちょこるなたん】ぼたん教官によるスバちょこルーナCoD【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2021/07/31</td>
			<td>00:59:23</td>
			<td><a href='https://youtu.be/m42ycks1Qls' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/01</td>
			<td>05:40:34</td>
			<td><a href='https://youtu.be/R937dYOC4Mw' target='_blank' class='outlink' rel='nofollow'>【#1】完全初見！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/01</td>
			<td>01:10:24</td>
			<td><a href='https://youtu.be/fZY0dD3PxMU' target='_blank' class='outlink' rel='nofollow'>【#subamoon】視聴者参加！ムーナとお絵描き伝言ゲームするしゅばああああ！！！/MOONA
				collabo【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/08/04</td>
			<td>03:38:58</td>
			<td><a href='https://youtu.be/1boT3h-dw1k' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏休みホラー：人生初青鬼：AOONI【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/05</td>
			<td>02:04:45</td>
			<td><a href='https://youtu.be/H_jf6Z-6C3Y' target='_blank' class='outlink' rel='nofollow'>【#生スバル】第１１回ソーセージレジェンド大会：SAUSAGE
				LEGEND【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/06</td>
			<td>01:26:38</td>
			<td><a href='https://youtu.be/vjbcPzja8NU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】1日警察署長するしゅばあああ！！！！：Police
				Simulator: Patrol Officers【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/07</td>
			<td>01:00:38</td>
			<td><a href='https://youtu.be/tLzXVo8ZCIM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏休みスペシャル！ゲスト有！？おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/07</td>
			<td>06:02:55</td>
			<td><a href='https://youtu.be/SgPvXloCWGY' target='_blank' class='outlink' rel='nofollow'>【#2】完全初見！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/08</td>
			<td>05:26:59</td>
			<td><a href='https://youtu.be/3bB4MHeQ1Ns' target='_blank' class='outlink' rel='nofollow'>【#3】完全初見！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/10</td>
			<td>01:04:30</td>
			<td><a href='https://youtu.be/cXL6F8J-GXo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏だからスーパーボール作るしゅばああああああああああ！！/making
				Bouncy ball 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/11</td>
			<td>01:05:58</td>
			<td><a href='https://youtu.be/BdF90qYNVOo' target='_blank' class='outlink' rel='nofollow'>【#ホロ怖】本当にあったホロライブの怖い話/Scary
				stories about holo-lives that really happened【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/08/14</td>
			<td>01:01:24</td>
			<td><a href='https://youtu.be/gbgdZM0qN3Y' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏休みスペシャル！ゲスト有！？おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/14</td>
			<td>05:27:28</td>
			<td><a href='https://youtu.be/DYJNpeexpcM' target='_blank' class='outlink' rel='nofollow'>【#4】完全初見！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/15</td>
			<td>05:19:10</td>
			<td><a href='https://youtu.be/rKuEaGccFV8' target='_blank' class='outlink' rel='nofollow'>【#5】完全初見！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/16</td>
			<td>01:50:08</td>
			<td><a href='https://youtu.be/26WKk3kl700' target='_blank' class='outlink' rel='nofollow'>【 #スバちょこるなたん
				】ＣＯＤでゾンビ倒すしゅばああああああああああああああああ！！！！： Call of Duty：BOCW【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/08/18</td>
			<td>02:01:06</td>
			<td><a href='https://youtu.be/m5goge3MhKY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏だね♡花火打ち上げ会場：Fireworks
				Mania【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/19</td>
			<td>01:47:32</td>
			<td><a href='https://youtu.be/W1MNp6HHwCg' target='_blank' class='outlink' rel='nofollow'>【 #スバちょこるなたん
				】ＣＯＤでゾンビ倒すしゅばあああああリベンジあああああああああああ！！！！： Call of Duty：BOCW【大空スバル/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/08/20</td>
			<td>00:55:37</td>
			<td><a href='https://youtu.be/0Op5oxqqFL4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ぼっこぼこにしてやるしゅばあああああああ！！！！！視聴者参加型マリカ/Viewer
				participation type Mario Kart【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/21</td>
			<td>00:59:47</td>
			<td><a href='https://youtu.be/sYUkxO05w-I' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏休みスペシャル！ゲスト有！？おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/21</td>
			<td>05:42:32</td>
			<td><a href='https://youtu.be/Dx-0rKjfhuk' target='_blank' class='outlink' rel='nofollow'>【#6】完全初見！！いくぞ！！古代種の神殿！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/22</td>
			<td>03:51:58</td>
			<td><a href='https://youtu.be/GjLN9uRAmgU' target='_blank' class='outlink' rel='nofollow'>【#7】完全初見！！超えるぞ！！！！雪原！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/22</td>
			<td>01:34:16</td>
			<td><a href='https://youtu.be/9kvMkzJr_l8' target='_blank' class='outlink' rel='nofollow'>【GARTIC
				PHONE】みんなでお絵描きやるしゅばああああああああああ！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/24</td>
			<td>02:35:44</td>
			<td><a href='https://youtu.be/V4GGxWUfFXw' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】素人がスマブラした結果/Super
				Smash Bros.【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/26</td>
			<td>02:01:37</td>
			<td><a href='https://youtu.be/pcSoZnE2FBs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夏休みホラー！！！！つぐのひの新作やるしゅばあああああああああ！！！！！/horror
				game【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/08/27</td>
			<td>01:58:40</td>
			<td><a href='https://youtu.be/eOdf9W-80fk' target='_blank' class='outlink' rel='nofollow'>【#ゆるホロチームカート】ホロメンでチーム対抗マリカバトルするしゅばあああああああああああああ！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/28</td>
			<td>05:26:01</td>
			<td><a href='https://youtu.be/RFQgzhBubTo' target='_blank' class='outlink' rel='nofollow'>【#8】完全初見！！スバウド探しに行くぞ！！！！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/29</td>
			<td>05:33:21</td>
			<td><a href='https://youtu.be/Fe3dS4m2trc' target='_blank' class='outlink' rel='nofollow'>【#9】完全初見！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/08/31</td>
			<td>02:42:46</td>
			<td><a href='https://youtu.be/qT-ZzEHfw2s' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ドキドキ！！NGなし？！マシュマロトーク！！！！/NO
				NG！！！Question tournament！！！【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/01</td>
			<td>02:23:32</td>
			<td><a href='https://youtu.be/s7yGgpPUz-0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】夜の街をパトロールするしゅばああああああああああああああああああああ！！！！！/police
				simulator【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/02</td>
			<td>00:57:19</td>
			<td><a href='https://youtu.be/-RKYVgVwkb8' target='_blank' class='outlink' rel='nofollow'>【#スバおかおっぱぴー】おかうと‼‼あつまれ‼メイドインワリオ：Wario
				Ware, Inc. Mega Party Game$ with OKAYU【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/03</td>
			<td>02:00:04</td>
			<td><a href='https://youtu.be/uRR9vnZ_DmA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバルってホラゲー中何db出てんの？検証するぞ！！！！！！/Emily
				Wants to Play【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/04</td>
			<td>01:02:58</td>
			<td><a href='https://youtu.be/NoBkt5wobrU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】まだまだ！夏休みスペシャル！？ゲスト有！？おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/04</td>
			<td>05:00:13</td>
			<td><a href='https://youtu.be/ndoC4OH3cbc' target='_blank' class='outlink' rel='nofollow'>【#10】最終回間近？！完全初見！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/05</td>
			<td>05:46:06</td>
			<td><a href='https://youtu.be/i3GEk9TcB40' target='_blank' class='outlink' rel='nofollow'>【#最終回】完全初見！！初代FF７！！！！【ホロライブ/大空スバル】※ネタバレあり</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/07</td>
			<td>00:57:49</td>
			<td><a href='https://youtu.be/9lmJg0a-YW8' target='_blank' class='outlink' rel='nofollow'>【#スバちょこるなたん】地獄大くじ引き大会【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/08</td>
			<td>03:20:03</td>
			<td><a href='https://youtu.be/sWvQ1yQOX6o' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ハリーポッターと秘密の部屋同時視聴会！！！/Harry
				Potter and the Chamber of Secrets【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/11</td>
			<td>02:46:31</td>
			<td><a href='https://youtu.be/9s11-3U_0U8' target='_blank' class='outlink' rel='nofollow'>【#生スバル】重大告知有！！！おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/11</td>
			<td>03:17:32</td>
			<td><a href='https://youtu.be/yZNw_r_Y2kA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】アドベントチルドレンコンプリート同時視聴会/FINAL
				FANTASY VII ADVENT CHILDREN COMPLETE【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/12</td>
			<td>04:30:56</td>
			<td><a href='https://youtu.be/hhVy80ZxIKo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/14</td>
			<td>00:11:44</td>
			<td><a href='https://youtu.be/OtcN-V3_jr8' target='_blank' class='outlink' rel='nofollow'>【】マジですまん悲しいお知らせ【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/15</td>
			<td>01:49:25</td>
			<td><a href='https://youtu.be/Npa15IaXv9I' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】セフィロス解禁！！チーム乱闘？！初心者エンジョイわいわいスマブラ！！！/Super
				Smash Bros.【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/16</td>
			<td>01:12:26</td>
			<td><a href='https://youtu.be/bWXmTyubBeE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】スバルの素！1時間ノープラン雑談【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/17</td>
			<td>01:01:35</td>
			<td><a href='https://youtu.be/iQYCu_a6eSo' target='_blank' class='outlink' rel='nofollow'>【
				#ホロ地球防衛隊】地球防衛軍5みんなでするしゅばあああああああ！！！！！：Earth Defense Force 5【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/09/17</td>
			<td>02:09:20</td>
			<td><a href='https://youtu.be/FiUMy_htQD0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】大空探偵事務所：ホロのマネージャー調査編：OOZORA
				detective：Solve the mystery of the hololive manager!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/18</td>
			<td>01:01:49</td>
			<td><a href='https://youtu.be/3qhw9dGnobg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/18</td>
			<td>04:52:24</td>
			<td><a href='https://youtu.be/6TXuYTPp7N4' target='_blank' class='outlink' rel='nofollow'>【#2】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/19</td>
			<td>04:47:24</td>
			<td><a href='https://youtu.be/_ymzFDKSmg8' target='_blank' class='outlink' rel='nofollow'>【#3】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/21</td>
			<td>01:09:40</td>
			<td><a href='https://youtu.be/IbtSdflEebg' target='_blank' class='outlink' rel='nofollow'>【#スバちょこるなたん】ゾンビぶっ倒すしゅばあああああああああ！！！！：WATCH
				DOGS LEGION【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2021/09/22</td>
			<td>02:22:36</td>
			<td><a href='https://youtu.be/dQ1pQ6nOzCE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】告知有？！ワンチャンまじで凸待ちO？！；；ソセレ凸待ち！！！：SAUSAGE
				LEGEND【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/23</td>
			<td>00:45:07</td>
			<td><a href='https://youtu.be/90ilZPcR3Jg' target='_blank' class='outlink' rel='nofollow'>【#スバちょこるなたん】L4D2でチームワークをみせてやるしゅばあああああ！！！！！：Left
				4 Dead 2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/24</td>
			<td>02:48:33</td>
			<td><a href='https://youtu.be/74wD6IXwpQo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】初見実況カスタムロボV2させてくださいおねがいします！！！！！！！：CUSTOM
				ROBO V2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/25</td>
			<td>01:02:57</td>
			<td><a href='https://youtu.be/bm79RjIbMKA' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはスバ！/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/09/25</td>
			<td>05:56:48</td>
			<td><a href='https://youtu.be/nnGC2h5cK5c' target='_blank' class='outlink' rel='nofollow'>【#4】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/09/29</td>
			<td>03:32:02</td>
			<td><a href='https://youtu.be/R_OjqP8Et3w' target='_blank' class='outlink' rel='nofollow'>【#生スバル】初見実況カスタムロボV2させてくださいおねがいします！！！！！！！：CUSTOM
				ROBO V2【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/09/30</td>
			<td>04:42:11</td>
			<td><a href='https://youtu.be/ByQZhUyftBk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ずっっっとやりたかったリトルナイトメアするしゅばあああああああああああ！！！：LITTLE
				NIGHTMARES【ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/10/02</td>
			<td>01:07:47</td>
			<td><a href='https://youtu.be/jj0ZbUKpBTs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル/FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/02</td>
			<td>05:26:46</td>
			<td><a href='https://youtu.be/xdB40PK5CCI' target='_blank' class='outlink' rel='nofollow'>【#5】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/03</td>
			<td>05:28:38</td>
			<td><a href='https://youtu.be/XAKpXPc0eh8' target='_blank' class='outlink' rel='nofollow'>【#6】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/05</td>
			<td>01:30:54</td>
			<td><a href='https://youtu.be/9TuoUTu_Qvk' target='_blank' class='outlink' rel='nofollow'>【シャニマス】新人Pの大空スバルです！！！かなたPよろしくお願いします！！！！！/THE
				IDOLM@STER SHINY COLORS【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/10/06</td>
			<td>02:31:12</td>
			<td><a href='https://youtu.be/gFUpshFisw0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】めちゃめちゃ久しぶりのマイクラっするしゅばああああ！！！！！！/MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/07</td>
			<td>00:58:46</td>
			<td><a href='https://youtu.be/mhvHZpK-9Ss' target='_blank' class='outlink' rel='nofollow'>【#大空スバル３周年】おまたせ！今日はたのしんでってな～！！！！：SUBARU
				3rd anniversary Live【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/10/08</td>
			<td>03:19:10</td>
			<td><a href='https://youtu.be/W3vEoLgGxfw' target='_blank' class='outlink' rel='nofollow'>【#３】カスタムロボV2やるしゅばああああああああああああああ/CUSTOM
				ROBO V2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/09</td>
			<td>03:53:13</td>
			<td><a href='https://youtu.be/8GoeyH0_2qg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】3周年ライブあざました！！！！！おはすば！/Free
				Talk about 3D live【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/10</td>
			<td>05:36:52</td>
			<td><a href='https://youtu.be/v31p5uJLAQ0' target='_blank' class='outlink' rel='nofollow'>【#最終回】シリーズ完全初見！！！！！mother２！！！！！/EarthBound【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/12</td>
			<td>00:59:56</td>
			<td><a href='https://youtu.be/EGgV3ZxzY48' target='_blank' class='outlink' rel='nofollow'>【#スバルーナ】ヴァイスシュヴァルツ初開封対決！！！！！！！：Subaluna
				Card Opening Showdown【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/10/14</td>
			<td>02:06:20</td>
			<td><a href='https://youtu.be/p9gcnFmaPrQ' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】方言マリオカート1時間以内に1位目指すしゅばああああああああああああああああああああ！！！！！：Mario
				Cart【】</a></td>


		</tr>
		<tr>
			<td>2021/10/16</td>
			<td>03:07:10</td>
			<td><a href='https://youtu.be/8wUiBGD5rqE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば/free
				talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/17</td>
			<td>05:33:41</td>
			<td><a href='https://youtu.be/VHJiG3a-UFA' target='_blank' class='outlink' rel='nofollow'>【#４】カスタムロボV2やるしゅばああああああああああああああ/CUSTOM
				ROBO V2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/18</td>
			<td>01:00:02</td>
			<td><a href='https://youtu.be/FFDWylrdAIo' target='_blank' class='outlink' rel='nofollow'>【#カプとれ】地元最強のクレーン捌きをみるしゅばああああああああああ！！！！/crane
				game【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/20</td>
			<td>04:16:08</td>
			<td><a href='https://youtu.be/oobz3zom2s8' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようございます！！！！！マイクラするしゅばあああああああ！！！！！：MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/21</td>
			<td>03:20:33</td>
			<td><a href='https://youtu.be/1sp9H3t8-Os' target='_blank' class='outlink' rel='nofollow'>【#５】カスタムロボV2やるしゅばああああああああああああああ/CUSTOM
				ROBO V2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/22</td>
			<td>01:56:24</td>
			<td><a href='https://youtu.be/_Sn1iVjaN5c' target='_blank' class='outlink' rel='nofollow'>【ご褒美】ポケモンセンターで爆買いしてきたしゅばああああああああああああああ！！！！/Open
				pokemon goods【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/23</td>
			<td>01:08:57</td>
			<td><a href='https://youtu.be/mIVZ2RbcMLY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば/free
				talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/24</td>
			<td>03:54:24</td>
			<td><a href='https://youtu.be/yRBQUCG-ZX8' target='_blank' class='outlink' rel='nofollow'>【#２】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/10/26</td>
			<td>02:56:28</td>
			<td><a href='https://youtu.be/YSowdwODds4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】マーベルのド新作ゲームプレイするしゅばあああああああああああ！！！！！！！：Marvel’s
				Guardians of the Galaxy game 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/28</td>
			<td>01:27:42</td>
			<td><a href='https://youtu.be/g05bmY0mkG4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】マイクラするしゅばあああああああああああああああああああ！！！！！：MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/10/30</td>
			<td>01:04:47</td>
			<td><a href='https://youtu.be/tIh3jv3GMuQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば/free
				talk【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/10/30</td>
			<td>05:50:27</td>
			<td><a href='https://youtu.be/4iAiwgEcTmg' target='_blank' class='outlink' rel='nofollow'>【#３】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/10/31</td>
			<td>06:57:39</td>
			<td><a href='https://youtu.be/3wjfIrofYOU' target='_blank' class='outlink' rel='nofollow'>【#４】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/02</td>
			<td>01:15:15</td>
			<td><a href='https://youtu.be/mrG9WZGGS8Y' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ホロライブ運動会！いくぞ白Aチーム！！！ぷち練習会！：MINECRAFT【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/11/02</td>
			<td>03:36:05</td>
			<td><a href='https://youtu.be/seJ0RcOWbOw' target='_blank' class='outlink' rel='nofollow'>【#最終回】旅立ち編最終回！？カスタムロボV2やるしゅばああああああああああああああ/CUSTOM
				ROBO V2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/03</td>
			<td>01:43:02</td>
			<td><a href='https://youtu.be/rlpDf4q_zNY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】みんなでゆる練習するしゅばあああああああああ！！！！！！/MINE
				CFAFT【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/05</td>
			<td>02:07:00</td>
			<td><a href='https://youtu.be/yGPHk99eAtI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】みんなでゆる練習するしゅばあああああああああ！！！！！！/MINE
				CFAFT【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/06</td>
			<td>05:27:45</td>
			<td><a href='https://youtu.be/EaqSdZEje8A' target='_blank' class='outlink' rel='nofollow'>【本番】白Aチーム！！！いくぞおおおおおおおおおお！！！！！【#ホロライブ大運動会2021】</a>
			</td>


		</tr>
		<tr>
			<td>2021/11/07</td>
			<td>04:04:02</td>
			<td><a href='https://youtu.be/iEte0-sMB1g' target='_blank' class='outlink' rel='nofollow'>【#５】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/09</td>
			<td>02:21:41</td>
			<td><a href='https://youtu.be/63In3FNJXqE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】邪神こおねってマジ？【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/11/11</td>
			<td>00:56:53</td>
			<td><a href='https://youtu.be/KHPgVajIF90' target='_blank' class='outlink' rel='nofollow'>【#すばおかみょーん】カービィのエアライドこらぼ　Kirby
				Airride【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/11/12</td>
			<td>02:49:54</td>
			<td><a href='https://youtu.be/1MeNYU7nTqE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】何デシベルでる？深夜放送するしゅばあああああ！！！The
				Radio Station 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/13</td>
			<td>01:06:20</td>
			<td><a href='https://youtu.be/GzIg-QK98Tk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/13</td>
			<td>06:55:03</td>
			<td><a href='https://youtu.be/-ZP3iin5Vps' target='_blank' class='outlink' rel='nofollow'>【#６】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/14</td>
			<td>06:22:05</td>
			<td><a href='https://youtu.be/M3VEvtY6bos' target='_blank' class='outlink' rel='nofollow'>【#７サブクエ回】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/16</td>
			<td>03:20:05</td>
			<td><a href='https://youtu.be/PrnIOGFWyf4' target='_blank' class='outlink' rel='nofollow'>【視聴者参加】方言スマブラで大暴れしゅばああああああああああああああああああ！！！！/Super
				Smash Bros.【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/20</td>
			<td>01:04:32</td>
			<td><a href='https://youtu.be/FWw47ZJFQo0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/20</td>
			<td>07:05:39</td>
			<td><a href='https://youtu.be/WY_jHQRXzBc' target='_blank' class='outlink' rel='nofollow'>【#８最終回】シリーズ初見！！！龍が如く極するしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/21</td>
			<td>03:38:13</td>
			<td><a href='https://youtu.be/6snI-di3kew' target='_blank' class='outlink' rel='nofollow'>【#１】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/11/22</td>
			<td>03:25:27</td>
			<td><a href='https://youtu.be/kuTCOXsADzE' target='_blank' class='outlink' rel='nofollow'>【＃1】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/11/24</td>
			<td>03:29:37</td>
			<td><a href='https://youtu.be/PgeNy-fWH0U' target='_blank' class='outlink' rel='nofollow'>【＃2】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/11/25</td>
			<td>01:01:30</td>
			<td><a href='https://youtu.be/uLEhg_vK2BY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バス運転？？？任せるしゅばああああああああああ！！：Bus
				Simulator 18【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/25</td>
			<td>03:39:41</td>
			<td><a href='https://youtu.be/Gd3S68KwQeE' target='_blank' class='outlink' rel='nofollow'>【＃３】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/11/26</td>
			<td>02:34:35</td>
			<td><a href='https://youtu.be/dAVG3KEB6Zs' target='_blank' class='outlink' rel='nofollow'>【#サブクエ回】龍が如く極・ポケサーするしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/11/27</td>
			<td>01:03:33</td>
			<td><a href='https://youtu.be/OsV_LY_9os4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/11/27</td>
			<td>05:51:05</td>
			<td><a href='https://youtu.be/8OpK9PzesJ0' target='_blank' class='outlink' rel='nofollow'>【#２】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/11/28</td>
			<td>04:24:49</td>
			<td><a href='https://youtu.be/dJdTh7M-qHM' target='_blank' class='outlink' rel='nofollow'>【#3】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/01</td>
			<td>02:53:59</td>
			<td><a href='https://youtu.be/pz4HBCRNyfM' target='_blank' class='outlink' rel='nofollow'>【＃４】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/02</td>
			<td>00:58:08</td>
			<td><a href='https://youtu.be/uoOXrneAGzE' target='_blank' class='outlink' rel='nofollow'>【#そらとしゅば】大先輩とマブになりたいが緊張が止まらないすばる：SORA
				collabo stream【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/02</td>
			<td>04:08:23</td>
			<td><a href='https://youtu.be/U5mcjbvfAFc' target='_blank' class='outlink' rel='nofollow'>【＃5】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/03</td>
			<td>04:23:46</td>
			<td><a href='https://youtu.be/2lvB1BVnhLE' target='_blank' class='outlink' rel='nofollow'>【#サブクエ回】龍が如く極・ポケサーするしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/12/04</td>
			<td>01:08:39</td>
			<td><a href='https://youtu.be/f10sZc90cpI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/04</td>
			<td>03:37:07</td>
			<td><a href='https://youtu.be/HvT930tZ2Dc' target='_blank' class='outlink' rel='nofollow'>【#4】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/05</td>
			<td>06:42:12</td>
			<td><a href='https://youtu.be/L2IUKJU8-U4' target='_blank' class='outlink' rel='nofollow'>【#5】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/07</td>
			<td>03:17:14</td>
			<td><a href='https://youtu.be/OUXO7m0R9pI' target='_blank' class='outlink' rel='nofollow'>【#6】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/08</td>
			<td>01:11:58</td>
			<td><a href='https://youtu.be/GSNTsfyVu2Q' target='_blank' class='outlink' rel='nofollow'>【地獄】#ホロ声真似へたくそ王 ：poor
				voice imitation tournament【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/11</td>
			<td>00:47:45</td>
			<td><a href='https://youtu.be/DICbpsbeNrU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/11</td>
			<td>05:29:58</td>
			<td><a href='https://youtu.be/s2Fiq8wGHpw' target='_blank' class='outlink' rel='nofollow'>【#6】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/12</td>
			<td>04:29:37</td>
			<td><a href='https://youtu.be/TblrlmrYUkc' target='_blank' class='outlink' rel='nofollow'>【#7】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/13</td>
			<td>00:57:30</td>
			<td><a href='https://youtu.be/2fBNSkxrxEw' target='_blank' class='outlink' rel='nofollow'>【#ノエスバ】ノエスバ関係性リセットオフコラボ：Noel
				Subaru OFF collabo【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/15</td>
			<td>02:40:06</td>
			<td><a href='https://youtu.be/2CBuAwcfeMY' target='_blank' class='outlink' rel='nofollow'>【#7】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/17</td>
			<td>02:33:55</td>
			<td><a href='https://youtu.be/KNrHY_Xdj9M' target='_blank' class='outlink' rel='nofollow'>【#メスキング回】龍が如く極・ポケサーするしゅばああああああああああああ！！！！！！：YAKUZA
				KIWAMI【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2021/12/18</td>
			<td>01:08:01</td>
			<td><a href='https://youtu.be/JwDuKIJVFCc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようスバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/18</td>
			<td>06:58:35</td>
			<td><a href='https://youtu.be/iNp0swicG_w' target='_blank' class='outlink' rel='nofollow'>【#8】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/21</td>
			<td>00:59:01</td>
			<td><a href='https://youtu.be/EYXMRDQWmlU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】宇宙食食べるしゅばあああああああああああああああ！！！！：Eat
				space food 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/22</td>
			<td>01:42:51</td>
			<td><a href='https://youtu.be/IPaD9XK_yFU' target='_blank' class='outlink' rel='nofollow'>【#7】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/22</td>
			<td>01:25:31</td>
			<td><a href='https://youtu.be/oWa0mJ7QqaU' target='_blank' class='outlink' rel='nofollow'>【#新スバせか】新すばらしきこのせかいするしゅばああああああああああああああああああ！！！！！！！！【】</a>
			</td>


		</tr>
		<tr>
			<td>2021/12/24</td>
			<td>03:32:55</td>
			<td><a href='https://youtu.be/xSAKDhyy87M' target='_blank' class='outlink' rel='nofollow'>【#生スバル】クリスマス？ソセレするけど？視聴者参加型＆ホロメン凸待ち：Sausage
				Legend【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/25</td>
			<td>02:25:51</td>
			<td><a href='https://youtu.be/-KCfXXJpWCc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはようメリクリスバル：Merry
				Christmas FREE TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/25</td>
			<td>01:56:19</td>
			<td><a href='https://youtu.be/WL1eGrp2xr8' target='_blank' class='outlink' rel='nofollow'>【#9】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/25</td>
			<td>00:19:24</td>
			<td><a href='https://youtu.be/-DN_oRkSNmI' target='_blank' class='outlink' rel='nofollow'>【#ホロクリスマス歌枠リレー】クリスマスうた：sing【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2021/12/25</td>
			<td>02:24:52</td>
			<td><a href='https://youtu.be/UDUSsv6fswE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】クリスマスパーティー：Christmas
				party【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/26</td>
			<td>07:55:40</td>
			<td><a href='https://youtu.be/tkKBey7fBeY' target='_blank' class='outlink' rel='nofollow'>【#10】龍が如く零やるしゅばあああああああああああああああああ！！！！：YAKUZA
				ZERO【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2021/12/26</td>
			<td>01:01:34</td>
			<td><a href='https://youtu.be/h-O3Lr_rDDY' target='_blank' class='outlink' rel='nofollow'>【#ホロ2期生】おくれてきた！ちょこスバあく＋？？？？クリパ！！！！！！！【奇跡】</a>
			</td>


		</tr>
		<tr>
			<td>2021/12/28</td>
			<td>02:23:32</td>
			<td><a href='https://youtu.be/rUZyo-6izxk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】グロ注意！冬ホラーOUT LAST
				2うわああああああああああああああああああああ！！！！：Grotesque expression attention【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2021/12/29</td>
			<td>01:58:16</td>
			<td><a href='https://youtu.be/Ew0gkuFEnE0' target='_blank' class='outlink' rel='nofollow'>【#8】ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2021/12/30</td>
			<td>03:11:54</td>
			<td><a href='https://youtu.be/5JoVRH05Wi0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】グロ注意！冬ホラーOUT LAST
				2うわああああああああああああああああああああ！！！！：Grotesque expression attention【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/01</td>
			<td>02:25:55</td>
			<td><a href='https://youtu.be/MDbfNeKsXeg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】あけましておめでとうスバル：HAPPY
				NEW YEAR!!! FREE TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/01</td>
			<td>00:58:38</td>
			<td><a href='https://youtu.be/yqdzPK9qf0U' target='_blank' class='outlink' rel='nofollow'>【#スバおかおっぱぴー】新年運試し？！？レトロゲーム福袋大開封会！！！：New
				Year's Luck Test !!!Game Fukubukuro Grand Opening Party</a></td>


		</tr>
		<tr>
			<td>2022/01/03</td>
			<td>01:02:19</td>
			<td><a href='https://youtu.be/uO8a7-GZ7l4' target='_blank' class='outlink' rel='nofollow'>【#フブとしゅば】大先輩とマブになりたいが緊張が止まらないすばる：FUBUKI
				collabo stream【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/04</td>
			<td>02:28:35</td>
			<td><a href='https://youtu.be/KtZFrS8Whpk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】マリカ大会近いのでポケサーすっぞ！！！！！！！！：YAKUZA０【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/06</td>
			<td>02:00:34</td>
			<td><a href='https://youtu.be/4XVUwiVXQz0' target='_blank' class='outlink' rel='nofollow'>【#ゆるホロチームカート】パッションマリオカートやるぞ！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/06</td>
			<td>02:36:48</td>
			<td><a href='https://youtu.be/6tg9WQ-D3ck' target='_blank' class='outlink' rel='nofollow'>【#生スバル】たのむクリアさせてくれ、そしてBANはやめてくれout
				last2！！！！！ 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/07</td>
			<td>00:28:19</td>
			<td><a href='https://youtu.be/0ekldQm3URg' target='_blank' class='outlink' rel='nofollow'>【#ホロお正月CUP2022】がんばるぞ！！！！！！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/07</td>
			<td>00:27:13</td>
			<td><a href='https://youtu.be/0tTX7QECIKU' target='_blank' class='outlink' rel='nofollow'>【#ホロお正月CUP2022】つよ杯がんばるぞ！！！！！！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/07</td>
			<td>02:38:07</td>
			<td><a href='https://youtu.be/ZSA3Xc4Us14' target='_blank' class='outlink' rel='nofollow'>【#生スバル】恐竜捕まえに行くぞ！！！！！！！！！！！：ARK【ホロライブ/大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/08</td>
			<td>01:03:16</td>
			<td><a href='https://youtu.be/T_k7r9HK-Bg' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/08</td>
			<td>05:17:13</td>
			<td><a href='https://youtu.be/Y7Yd8MvDebk' target='_blank' class='outlink' rel='nofollow'>【#10】クリア目指して！！！！！！！ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/09</td>
			<td>08:25:30</td>
			<td><a href='https://youtu.be/CANkSiNiRJg' target='_blank' class='outlink' rel='nofollow'>【#10】目指せ！！！！殿堂入り！！！ポケモンやるしゅばああああああああああああ【＃スバおか対決
				/ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/12</td>
			<td>01:45:41</td>
			<td><a href='https://youtu.be/PwwgiBtSfeQ' target='_blank' class='outlink' rel='nofollow'>【#STBL】FPS初心者だけどL4D2やるしゅばあああああああああああああああああああああああああ！！！！！【大空スバル視点】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/13</td>
			<td>02:40:10</td>
			<td><a href='https://youtu.be/A3mNr1Quzq4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】神室町最速はすばるしゅばああああああああああああああ！！！！！：YAKUZA0【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/14</td>
			<td>02:10:25</td>
			<td><a href='https://youtu.be/TlONYP6P-PI' target='_blank' class='outlink' rel='nofollow'>【#生スバル】大空スバルイメージアンケートしたら衝撃の結果に涙が止まらない2022：image
				survey project 【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/15</td>
			<td>02:17:31</td>
			<td><a href='https://youtu.be/fhNf2lY9bXo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/16</td>
			<td>02:45:01</td>
			<td><a href='https://youtu.be/WChoKbAI7XU' target='_blank' class='outlink' rel='nofollow'>【#１】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/01/18</td>
			<td>01:02:38</td>
			<td><a href='https://youtu.be/2_eoDs7dINQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】Vリスナーの推し活お悩みに大空スバルが回答！！：A
				consultation room for Vtuber listeners.【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/19</td>
			<td>01:20:37</td>
			<td><a href='https://youtu.be/zsYfT6T4V6A' target='_blank' class='outlink' rel='nofollow'>【＃スバおか対決
				】これが本当の最終決戦しゅばあああああ！！！！：pokemon【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/21</td>
			<td>03:07:14</td>
			<td><a href='https://youtu.be/OvV0d81LjVM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】恐竜より人間が怖い！！！！！！！！！：ARK【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/22</td>
			<td>01:05:40</td>
			<td><a href='https://youtu.be/OMRoLDdYyLM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/22</td>
			<td>04:35:13</td>
			<td><a href='https://youtu.be/X1ExCWlORxo' target='_blank' class='outlink' rel='nofollow'>【#２】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/01/23</td>
			<td>05:31:31</td>
			<td><a href='https://youtu.be/xLLyTYIODQ0' target='_blank' class='outlink' rel='nofollow'>【#３】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/01/25</td>
			<td>02:57:35</td>
			<td><a href='https://youtu.be/ks6KoxWnkdk' target='_blank' class='outlink' rel='nofollow'>【#生スバル】なんとかして生き残りたい！！！！！：ARK【ホロライブ】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/26</td>
			<td>02:45:58</td>
			<td><a href='https://youtu.be/BxgLYIMe5Lc' target='_blank' class='outlink' rel='nofollow'>【】uta/sing song【】</a>
			</td>


		</tr>
		<tr>
			<td>2022/01/29</td>
			<td>01:01:02</td>
			<td><a href='https://youtu.be/56d1YI8ObFU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/01/29</td>
			<td>09:41:13</td>
			<td><a href='https://youtu.be/LE8V5iNemBA' target='_blank' class='outlink' rel='nofollow'>【#ホロライブレトロゲーム部】マ　リ　オ　６　４　ク　リ　ア　耐　久/Mario
				64 with OKAYU【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/01/30</td>
			<td>04:03:59</td>
			<td><a href='https://youtu.be/BaflqQJYpoA' target='_blank' class='outlink' rel='nofollow'>【#４】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/02/01</td>
			<td>02:15:01</td>
			<td><a href='https://youtu.be/_2SfN4TLVYs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】視聴者参加型！！！スマブラするしゅばあああああああああああ！！！！：Smash
				Brothers【ホロライブ】</a></td>


		</tr>
		<tr>
			<td>2022/02/03</td>
			<td>01:00:21</td>
			<td><a href='https://youtu.be/FXaV1tbQZg0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】寿司屋昴しゅばあああああああああああああああああ！！！！！Cooking
				Sushi 【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/04</td>
			<td>02:52:22</td>
			<td><a href='https://youtu.be/ccbG1oyHdeE' target='_blank' class='outlink' rel='nofollow'>【ホロARK】第一話　土の味と友の絆：Episode
				1 The taste of soil and the bond of friends【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/05</td>
			<td>01:03:10</td>
			<td><a href='https://youtu.be/jsfktTyZtiw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/05</td>
			<td>03:32:02</td>
			<td><a href='https://youtu.be/RZnmkn8zZAU' target='_blank' class='outlink' rel='nofollow'>【#6】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/02/06</td>
			<td>05:41:35</td>
			<td><a href='https://youtu.be/qDZt6QzbS88' target='_blank' class='outlink' rel='nofollow'>【#6】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/02/08</td>
			<td>04:04:43</td>
			<td><a href='https://youtu.be/WF1G8UTN5n4' target='_blank' class='outlink' rel='nofollow'>【ホロARK】第二話　２匹の龍💛：Episode
				2 Two dragons💛【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/09</td>
			<td>00:59:54</td>
			<td><a href='https://youtu.be/ZofvzxSk0pA' target='_blank' class='outlink' rel='nofollow'>【#すばちょこるなたん】全肯定APEX！！！！！！！！！！！！！！！【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/02/11</td>
			<td>02:29:10</td>
			<td><a href='https://youtu.be/8KQkYtE5uYU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD同時試聴会：CLANNAD
				watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/11</td>
			<td>02:47:27</td>
			<td><a href='https://youtu.be/Wen0oouwXUA' target='_blank' class='outlink' rel='nofollow'>【#シンクロニクル】章の終わりに誰かが死ぬってマジ？！？【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/02/12</td>
			<td>04:04:27</td>
			<td><a href='https://youtu.be/dhTIzXp1NK8' target='_blank' class='outlink' rel='nofollow'>【#8】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/02/13</td>
			<td>05:02:10</td>
			<td><a href='https://youtu.be/RVwu0YlvqDk' target='_blank' class='outlink' rel='nofollow'>【#9】龍が如く極２やるしゅばあああああああああああああ！！！：YAKUZA
				KIWAMI２【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/02/14</td>
			<td>02:13:07</td>
			<td><a href='https://youtu.be/zxBAmyNtcLw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ソーセージレジェンド２が遂にでたしゅばあああああああああああああああああ！！！！！！：Sausage
				Legend2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/18</td>
			<td>01:26:50</td>
			<td><a href='https://youtu.be/FSrtTu13ftg' target='_blank' class='outlink' rel='nofollow'>【#スバルとリィンカネ】NieR
				Re[in]carnationの新ストーリーするしゅばああああああああああああ！！！！！！【】</a></td>


		</tr>
		<tr>
			<td>2022/02/18</td>
			<td>01:56:51</td>
			<td><a href='https://youtu.be/zzEttU56YKE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD同時試聴会：CLANNAD
				watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/19</td>
			<td>02:43:13</td>
			<td><a href='https://youtu.be/YiDJCl62eVE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/21</td>
			<td>01:49:02</td>
			<td><a href='https://youtu.be/aPB6jZ3cqZg' target='_blank' class='outlink' rel='nofollow'>【 #常MOS
				】漂流生活やるしゅばああああああああああああああああ：Raft【 ホロライブ/大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2022/02/21</td>
			<td>00:04:18</td>
			<td><a href='https://youtu.be/b5djTDjlTNM' target='_blank' class='outlink' rel='nofollow'>Fantastic
				future/大空スバル(cover) -VARK LIVE version</a></td>


		</tr>
		<tr>
			<td>2022/02/21</td>
			<td>01:37:35</td>
			<td><a href='https://youtu.be/FmTM-vgVSpU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】龍が如く極２　キ ャ バ ク ラ
				経 営 最 終 回：YAKUZA KIWAMI 2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/23</td>
			<td>01:54:06</td>
			<td><a href='https://youtu.be/XxllYuYEur4' target='_blank' class='outlink' rel='nofollow'>【#ホロライブヘブバンWEEK】最上の切なさってマジ？！ヘブンバーンズレッドするしゅばああああ！！！！：HEAVEN
				BURNS RED【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/24</td>
			<td>01:26:45</td>
			<td><a href='https://youtu.be/LIScEtJUJu0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】炎の料理人クッキングファイター好するしゅばああああああ！！！！！！！：Cooking
				Fighter HAO【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/25</td>
			<td>02:24:39</td>
			<td><a href='https://youtu.be/OaohXbY4MZE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD同時試聴会：CLANNAD
				watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/02/26</td>
			<td>01:00:56</td>
			<td><a href='https://youtu.be/6l0WA2FzxHo' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/12</td>
			<td>01:03:01</td>
			<td><a href='https://youtu.be/ABZ&#45;&#45;Z-rdc4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】復活のおはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/14</td>
			<td>03:23:54</td>
			<td><a href='https://youtu.be/qw20SKNcweU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ホワイト電脳戦機ーバーチャロン　マスターピースするしゅばあああああああああああああ！！！！：CYBER
				TROOPERS VIRTUAL-ON【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/16</td>
			<td>02:58:54</td>
			<td><a href='https://youtu.be/mE3Cf8M3Mf4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ずっとやりたかったバンパイアサバイバーズするしゅばああああああああ！！！！：Vampire
				Survivors【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/17</td>
			<td>01:08:34</td>
			<td><a href='https://youtu.be/Uk6LDY6QI9w' target='_blank' class='outlink' rel='nofollow'>【METAL SLUG
				ATTACK】メタルスラッグアタックするしゅばああああああああ！！！！：METAL SLUG ATTACK【ホロライブ：大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/20</td>
			<td>00:59:10</td>
			<td><a href='https://youtu.be/cYFfCrDo854' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/20</td>
			<td>01:28:06</td>
			<td><a href='https://youtu.be/E9VAkJTaLPE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD同時試聴会：CLANNAD
				watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/21</td>
			<td>01:32:33</td>
			<td><a href='https://youtu.be/MEjq9Vg1Cd0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】炎の料理人クッキングファイター好するしゅばああああああ！！！！！！！：Cooking
				Fighter HAO【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/24</td>
			<td>02:36:21</td>
			<td><a href='https://youtu.be/abs2Kvd_JkE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】ライトニングウィンナー出すしゅばあああああああ！！！！！！/Sausage
				Legend2【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/25</td>
			<td>02:47:52</td>
			<td><a href='https://youtu.be/p4woPgCM17c' target='_blank' class='outlink' rel='nofollow'>【#生スバル】無印最終回まで！完全初見のCLANNAD同時試聴会：CLANNAD
				watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/26</td>
			<td>01:14:42</td>
			<td><a href='https://youtu.be/ryI4LbqWKTM' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/26</td>
			<td>03:58:26</td>
			<td><a href='https://youtu.be/NPK2sIDwwvE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】クライシスコアやるしゅばあああああああああああああ！！！：CRISIS
				CORE -FINAL FANTASY VII-【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/27</td>
			<td>01:53:28</td>
			<td><a href='https://youtu.be/DZ6brFJUMD4' target='_blank' class='outlink' rel='nofollow'>【#生スバル】クライシスコアやるしゅばあああああああああああああ！！！：CRISIS
				CORE -FINAL FANTASY VII-【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2022/03/29</td>
			<td>02:22:36</td>
			<td><a href='https://youtu.be/alqpZS_E7bc' target='_blank' class='outlink' rel='nofollow'>【#生スバル】バンパイアサバイバーで初クリア目指すしゅばああああああああああああ！！！！：VAMPIRE
				SURVIVORS【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/03/30</td>
			<td>01:45:11</td>
			<td><a href='https://youtu.be/DyqYSXDzblA' target='_blank' class='outlink' rel='nofollow'>【#ゆるホロチームカート】みんなでマリオカートするしゅばああああああああああああ！！！！：Mario
				Cart【大空スバル視点】</a></td>


		</tr>
		<tr>
			<td>2022/03/31</td>
			<td>01:31:32</td>
			<td><a href='https://youtu.be/izGlURXOBoU' target='_blank' class='outlink' rel='nofollow'>【バビロンズフォール】新作のゲームをみんなでするしゅばあああああああ！！！！：BABYLON‘S
				FALL　【大空スバル視点/※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/01</td>
			<td>01:26:10</td>
			<td><a href='https://youtu.be/UWPWAIajyjU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD
				After同時試聴会：CLANNAD watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/02</td>
			<td>01:07:01</td>
			<td><a href='https://youtu.be/GRDVLbr1XVQ' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/02</td>
			<td>04:28:37</td>
			<td><a href='https://youtu.be/xHYewDnrBJc' target='_blank' class='outlink' rel='nofollow'>【#３】クライシスコアやるしゅばあああああああああああああ！！！：CRISIS
				CORE -FINAL FANTASY VII-【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2022/04/03</td>
			<td>04:09:47</td>
			<td><a href='https://youtu.be/YSZHFPVeIJ8' target='_blank' class='outlink' rel='nofollow'>【#４】クライシスコアやるしゅばあああああああああああああ！！！：CRISIS
				CORE -FINAL FANTASY VII-【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2022/04/05</td>
			<td>03:19:11</td>
			<td><a href='https://youtu.be/I5ICk5mjOkk' target='_blank' class='outlink' rel='nofollow'>【#最終回】炎の料理人クッキングファイター好するしゅばああああああ！！！！！！！：Cooking
				Fighter HAO【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/06</td>
			<td>02:09:35</td>
			<td><a href='https://youtu.be/zxBkcRq0P8g' target='_blank' class='outlink' rel='nofollow'>【#生スバル】大　空　警　察　出　動　準備編😁👍：MINE
				CRAFT【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/07</td>
			<td>03:41:44</td>
			<td><a href='https://youtu.be/P7hsYZr2Kec' target='_blank' class='outlink' rel='nofollow'>【#生スバル】閉店するしゅばああああああああああああああああああああ！！！！！：The
				Closing Shift【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/08</td>
			<td>02:45:12</td>
			<td><a href='https://youtu.be/_2H9pk4ifng' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD
				After&amp;番外編同時試聴会：CLANNAD watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/09</td>
			<td>01:01:21</td>
			<td><a href='https://youtu.be/MFBWrGjvz2s' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/09</td>
			<td>07:29:55</td>
			<td><a href='https://youtu.be/5Mzvn3DV77c' target='_blank' class='outlink' rel='nofollow'>【#最終回】クライシスコアやるしゅばあああああああああああああ！！！：CRISIS
				CORE -FINAL FANTASY VII-【※ネタバレ有り】</a></td>


		</tr>
		<tr>
			<td>2022/04/10</td>
			<td>04:21:49</td>
			<td><a href='https://youtu.be/jUoMzohASVA' target='_blank' class='outlink' rel='nofollow'>【#１】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/10</td>
			<td>01:46:20</td>
			<td><a href='https://youtu.be/DUfE90Uqzqs' target='_blank' class='outlink' rel='nofollow'>【HOLOTORI】みんなでお絵描き伝言ゲームするしゅばああああああああああああああああああああああああ！！！！！:Gartic
				Phone【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/12</td>
			<td>01:49:23</td>
			<td><a href='https://youtu.be/4l-ic3PwKi0' target='_blank' class='outlink' rel='nofollow'>【#生スバル】MIMIZU世界一目指すしゅばあああああああああああああああああああああ！！！！！！：slither.io【ホロライブ/大空スバル】</a>
			</td>


		</tr>
		<tr>
			<td>2022/04/14</td>
			<td>01:15:46</td>
			<td><a href='https://youtu.be/2aIg8kE-WuY' target='_blank' class='outlink' rel='nofollow'>【#生スバル】罪を裁く場所つくるぞ！！！！！！！！！：MINE
				CRAFT【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/16</td>
			<td>01:03:17</td>
			<td><a href='https://youtu.be/H8irmQkE_FU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/16</td>
			<td>05:22:03</td>
			<td><a href='https://youtu.be/akgwLjoXDHM' target='_blank' class='outlink' rel='nofollow'>【#２】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/17</td>
			<td>05:42:05</td>
			<td><a href='https://youtu.be/kWSjswn1eqw' target='_blank' class='outlink' rel='nofollow'>【#３】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/19</td>
			<td>02:43:00</td>
			<td><a href='https://youtu.be/MTpKegpY5ec' target='_blank' class='outlink' rel='nofollow'>【#生スバル】視聴者参加？！ツインスティックでバーチャロンするしゅばああああああああああああああ！！！！：CYBER
				TROOPERS VIRTUAL-ON【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/20</td>
			<td>02:46:31</td>
			<td><a href='https://youtu.be/E3Yw0k9T7fU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】NGなし？！マシュマロ質問大回答会！！！！！：No
				NG!! question!!!【ホロっライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/22</td>
			<td>02:26:41</td>
			<td><a href='https://youtu.be/cnR8ncN-ZIU' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD
				After同時試聴会：CLANNAD watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/23</td>
			<td>01:06:11</td>
			<td><a href='https://youtu.be/i35f4gucnHs' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/23</td>
			<td>05:29:50</td>
			<td><a href='https://youtu.be/I2e-GN68Css' target='_blank' class='outlink' rel='nofollow'>【#４】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/24</td>
			<td>05:28:18</td>
			<td><a href='https://youtu.be/Ze6OoLLwy2s' target='_blank' class='outlink' rel='nofollow'>【#５】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		<tr>
			<td>2022/04/29</td>
			<td>03:03:54</td>
			<td><a href='https://youtu.be/x_WQrN7q6iE' target='_blank' class='outlink' rel='nofollow'>【#生スバル】完全初見のCLANNAD
				After同時試聴会：CLANNAD watch party!!!【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/30</td>
			<td>01:03:10</td>
			<td><a href='https://youtu.be/TmiRa_kfNKw' target='_blank' class='outlink' rel='nofollow'>【#生スバル】おはすば！スバル：FREE
				TALK【ホロライブ/大空スバル】</a></td>


		</tr>
		<tr>
			<td>2022/04/30</td>
			<td>05:45:23</td>
			<td><a href='https://youtu.be/oe5D227RvEY' target='_blank' class='outlink' rel='nofollow'>【#6】FF7リメイクするしゅばあああああああああああああ！！！：FINAL
				FANTASY VII REMAKE【※ネタバレあり】</a></td>


		</tr>
		</tbody>
	</table>
</div>-->
