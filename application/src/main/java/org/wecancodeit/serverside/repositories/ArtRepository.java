package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.ArtCollection;
import org.wecancodeit.serverside.models.GameTile;

public interface ArtRepository extends CrudRepository<ArtCollection, Long> {

}
