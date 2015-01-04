<div class="meta">
	<?php if(!is_page()){
		if(is_home()){
			the_author_posts_link();
			echo ' | ';
		}
		
		the_category(', ');
		echo ' kategorisi hakkında yazılmıştır. Yaklaşık ';
	}else{
		echo 'WordPress Sayfası';
	} ?>
	<span class="meta-time"><strong><?php echo floor(wcount() / 200) + 1 . ' ' ?> dakika</strong> okuma süresi öngörülmektedir.</span>
</div>