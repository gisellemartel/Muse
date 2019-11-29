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

		songRepo.save(new Song("Africa", "Toto",""));
		songRepo.save(new Song("Arab Money", "Busta Rhymes", ""));
		songRepo.save(new Song("Kissed", "Sun",""));
		songRepo.save(new Song("Hyper-Ballad", "Bjork", ""));
		songRepo.save(new Song("Bachelorette", "Bjork", ""));
		songRepo.save(new Song("Ruins", "Moon", ""));
		songRepo.save(new Song("Maiden Voyage", "Herbie Hancock", ""));
		songRepo.save(new Song("Auntie's Harp", "Flying Lotus", ""));
		songRepo.save(new Song("Telephasic Workshop", "Boards of Canada", ""));
		songRepo.save(new Song("A Night in Tunisia", "Art Blakey and the Jazz Messengers", ""));
		songRepo.save(new Song("Pinch", "Can", ""));
		songRepo.save(new Song("Optimistic", "Radiohead", ""));
		

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
