<div class="meta">
	<?php if(!is_page()){
		if(is_home()){
			the_author_posts_link();
			echo ' | ';
		}
		
		the_category(', ');
		echo ' kategorisi';
	}else{
		echo 'WordPress Sayfası';
	} ?>
	 - <span class="meta-time"><i class="icon-bookmark"></i> <?php echo floor(wcount() / 200) + 1 . ' dakika okuma süresi' ?></span>
</div>