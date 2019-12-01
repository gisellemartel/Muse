package com.soen343.muse;

import com.soen343.muse.models.Song;
import com.soen343.muse.repositories.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MuseApplication implements CommandLineRunner
{
	@Autowired
	private SongRepo songRepo;

	public static void main(String[] args)
	{
		SpringApplication.run(MuseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception
	{
		
		songRepo.deleteAll();
		
		songRepo.save(new Song("Africa", "Toto","Toto IV", "https://www.musicdirect.com/Portals/0/Hotcakes/Data/products/00013a4e-0000-0000-0000-000000000000/medium/LSPC37728.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Africa.mp3?raw=true"));
		songRepo.save(new Song("Arab Money", "Busta Rhymes", "Back on my B.S.", "https://images-na.ssl-images-amazon.com/images/I/61WSBBfHEoL.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/ArabMoney.mp3?raw=true"));
		songRepo.save(new Song("Kissed", "Sun","Sun", "http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2018/11/thesun.jpg?mw=600", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Kissed.mp3?raw=true"));
		songRepo.save(new Song("Hyper-Ballad", "Bjork", "Post", "https://upload.wikimedia.org/wikipedia/en/3/3f/Bjork_Post.png", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Hyper-Ballad.mp3?raw=true"));
		songRepo.save(new Song("Bachelorette", "Bjork", "Homogenic", "https://upload.wikimedia.org/wikipedia/en/a/af/Björk_-_Homogenic.png", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Bachelorette.mp3?raw=true"));
		songRepo.save(new Song("Ruins", "Moon", "Moon", "https://i1.sndcdn.com/avatars-000142013925-q9rp39-t500x500.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Ruins.mp3?raw=true"));
		songRepo.save(new Song("Maiden Voyage", "Herbie Hancock", "Maiden Voyage", "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Maiden_Voyage_%28Hancock%29.jpg/220px-Maiden_Voyage_%28Hancock%29.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/MaidenVoyage.mp3?raw=true"));
		songRepo.save(new Song("Auntie's Harp", "Flying Lotus", "Los Angeles", "https://static.stereogum.com/uploads/2018/06/Flying-Lotus-Los-Angeles-1528337036-640x640.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/AuntiesHarp.mp3?raw=true"));
		songRepo.save(new Song("Telephasic Workshop", "Boards of Canada", "Music Has the Right to Children",      "https://upload.wikimedia.org/wikipedia/en/e/e9/Musichastherighttochildren.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/TelephasicWorkshop.mp3?raw=true"));
		songRepo.save(new Song("A Night in Tunisia", "Art Blakey and the Jazz Messengers", "A Night in Tunisia", "https://cdn3.volusion.com/gnvdh.kdfvm/v/vspfiles/photos/MMBST-84049-2.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/ANightInTunisia.mp3?raw=true"));
		songRepo.save(new Song("Pinch", "Can", "Ege Bamyasi", "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Egebamyasialbumcover.jpg/220px-Egebamyasialbumcover.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Pinch.mp3?raw=true"));
		songRepo.save(new Song("Optimistic", "Radiohead", "Kid A", "https://media.pitchfork.com/photos/5929a1ebb1335d7bf1698393/1:1/w_320/dddaf5bb.jpg", "https://github.com/Nichita-Hariton/mp3Files/blob/master/Optimistic.mp3?raw=true"));

		System.out.println("finding all");
		for (Song song : songRepo.findAll())
		{
			System.out.println(song);
		}

		System.out.println("Name");

		System.out.println("Artist");
		for (Song song : songRepo.findByArtist("Busta Rhymes"))
		{
			System.out.println(song);
		}
	}
}
